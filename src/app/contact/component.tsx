import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import { FormEvent, Fragment, useEffect, useRef, useState } from 'react';

import Icon from '@/app/shared/icon/component';
import Layout from '@/app/shared/layout/component';
import { BREAKPOINT_1, BREAKPOINT_2, GOOGLE_MAPS_PLACE_ID } from '@/data/constants.json';
import { CLOCK, CLOSE, EMAIL, FAILURE, PHONE, PLACEHOLDER, SUCCESS, WARNING } from '@/data/icons.json';

const ContactPage = (): JSX.Element => (
  <>
    <Head>
      <title>Contact | Terre Tropicale</title>
    </Head>
    <Layout>
      <Header />
      <IntroSection />
      <ContactFormSection />
      <CompanyLocationSection />
      <div className="flex justify-center mb-8">
        <ContactDetailsSection />
      </div>
    </Layout>
  </>
);

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/headers/header-3.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
    <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
      <h1 className="mb-1">CONTACT</h1>
      <p className="page-subtitle">Restons en contact</p>
      <p className="page-subtitle">Inscrivez-vous pour une degustation gratuite</p>
    </div>
  </header>
);

const IntroSection = () => (
  <section className="mb-8 px-4">
    <p>
      Vous êtes intéressé par nos produits et/ou services et vous souhaitez être contacté? N&rsquo;hesitez pas à nous
      écrire. Nous vous contacterons dans les plus bref délais.
    </p>
  </section>
);

const senderInitialValue = {
  name: '',
  email: '',
  phone: '',
  entity: 'Particulier',
  message: ''
};

const ContactFormSection = () => {
  const [sender, setSender] = useState<Sender>(senderInitialValue);
  const [isOpenModalConfirmation, setIsOpenModalConfirmation] = useState(false);
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);
  const [isOpenModalFailure, setIsOpenModalFailure] = useState(false);
  const { name, email, phone, entity, message } = sender;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpenModalConfirmation(true);
  };

  const openModalSuccess = () => {
    setSender(senderInitialValue);
    setIsOpenModalSuccess(true);
  };

  const openModalFailure = () => {
    setIsOpenModalFailure(true);
  };

  return (
    <section className="mb-8 px-4 mh:w-1/2 mh:mx-auto tv:w-1/2 tv:mx-auto th:w-1/2 th:mx-auto">
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col">
        <div className="space-y-3 mb-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-lime-600">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={event => setSender({ ...sender, name: event.target.value })}
              className="mt-1 py-1 block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-lime-600">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={event => setSender({ ...sender, email: event.target.value })}
              className="mt-1 py-1 block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-lime-600">
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={phone}
              onChange={event => setSender({ ...sender, phone: event.target.value })}
              className="mt-1 py-1 block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="entity" className="block text-sm font-medium text-lime-600">
              Vous êtes
            </label>
            <select
              id="entity"
              name="entity"
              value={entity}
              onChange={event => setSender({ ...sender, entity: event.target.value })}
              className="mt-1 py-1 block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow border-gray-300 rounded-md"
            >
              <option value="Particulier">Particulier</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-lime-600">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={message}
              onChange={event => setSender({ ...sender, message: event.target.value })}
              className="mt-1 py-1 shadow block w-full resize-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        <input type="submit" value="Envoyer" className="button self-end" />
      </form>
      {isOpenModalConfirmation && (
        <ModalConfirmation
          sender={sender}
          isOpenModalConfirmation={isOpenModalConfirmation}
          closeModalConfirmation={() => setIsOpenModalConfirmation(false)}
          openModalSuccess={openModalSuccess}
          openModalFailure={openModalFailure}
        />
      )}
      {isOpenModalSuccess && (
        <ModalSuccess isOpenModalSuccess={isOpenModalSuccess} closeModalSuccess={() => setIsOpenModalSuccess(false)} />
      )}
      {isOpenModalFailure && (
        <ModalFailure isOpenModalFailure={isOpenModalFailure} closeModalFailure={() => setIsOpenModalFailure(false)} />
      )}
    </section>
  );
};

const ModalConfirmation = ({
  sender,
  isOpenModalConfirmation,
  closeModalConfirmation,
  openModalSuccess,
  openModalFailure
}: ModalConfirmationProps) => {
  const refButtonConfirm = useRef<HTMLButtonElement>(null);

  const handleConfirm = async () => {
    closeModalConfirmation();
    try {
      const url = '/api/contact';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sender)
      });
      if (response.status === 200) {
        openModalSuccess();
      }
      if (response.status === 500) {
        openModalFailure();
      }
    } catch {
      openModalFailure();
    }
  };

  return (
    <Transition.Root show={isOpenModalConfirmation} as={Fragment}>
      <Dialog
        as="div"
        static
        initialFocus={refButtonConfirm}
        open={isOpenModalConfirmation}
        onClose={closeModalConfirmation}
      >
        <div className="z-20 fixed inset-0 flex justify-center items-center px-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex flex-col rounded-lg shadow-xl overflow-hidden bg-white transform transition-all">
              <button
                onClick={closeModalConfirmation}
                className="self-end ml-auto mr-2 mt-2 p-2 rounded hover:bg-lime-300 focus:outline-none"
              >
                <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="w-4" />
              </button>
              <div className="px-6 pt-2 pb-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                  <Icon path={WARNING.path} viewBox={WARNING.viewBox} className="w-7 fill-current text-orange-400" />
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <Dialog.Title as="span" className="font-semibold">
                    Êtes-vous sûr?
                  </Dialog.Title>
                  <span className="mt-1 text-sm text-gray-500">Vous allez envoyer ce message.</span>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 space-x-4 bg-gray-100">
                <button
                  ref={refButtonConfirm}
                  onClick={handleConfirm}
                  className="px-4 py-1.5 border border-transparent rounded-md shadow-sm text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const ModalSuccess = ({ isOpenModalSuccess, closeModalSuccess }: ModalSuccessProps) => {
  const refButtonOk = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={isOpenModalSuccess} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonOk} open={isOpenModalSuccess} onClose={closeModalSuccess}>
        <div className="z-20 fixed inset-0 flex justify-center items-center px-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex flex-col rounded-lg shadow-xl overflow-hidden bg-white transform transition-all">
              <button
                onClick={closeModalSuccess}
                className="self-end ml-auto mr-2 mt-2 p-2 rounded hover:bg-lime-300 focus:outline-none"
              >
                <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="w-4" />
              </button>
              <div className="px-6 pt-2 pb-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <Icon path={SUCCESS.path} viewBox={SUCCESS.viewBox} className="w-7 fill-current text-green-400" />
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <Dialog.Title as="span" className="font-semibold">
                    Message envoyé!
                  </Dialog.Title>
                  <span className="mt-1 text-sm text-gray-500">Votre message a été envoyé.</span>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 space-x-4 bg-gray-100">
                <button
                  ref={refButtonOk}
                  onClick={closeModalSuccess}
                  className="px-4 py-1.5 border border-gray-300 rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none"
                >
                  OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const ModalFailure = ({ isOpenModalFailure, closeModalFailure }: ModalFailureProps) => {
  const refButtonOk = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={isOpenModalFailure} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonOk} open={isOpenModalFailure} onClose={closeModalFailure}>
        <div className="z-20 fixed inset-0 flex justify-center items-center px-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex flex-col rounded-lg shadow-xl overflow-hidden bg-white transform transition-all">
              <button
                onClick={closeModalFailure}
                className="self-end ml-auto mr-2 mt-2 p-2 rounded hover:bg-lime-300 focus:outline-none"
              >
                <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="w-4" />
              </button>
              <div className="px-6 pt-2 pb-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <Icon path={FAILURE.path} viewBox={FAILURE.viewBox} className="w-7 fill-current text-red-400" />
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <Dialog.Title as="span" className="font-semibold">
                    Message non envoyé!
                  </Dialog.Title>
                  <span className="mt-1 text-sm text-gray-500">Votre message n&rsquo;a pas pu être envoyé.</span>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 space-x-4 bg-gray-100">
                <button
                  ref={refButtonOk}
                  onClick={closeModalFailure}
                  className="px-4 py-1.5 border border-gray-300 rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none"
                >
                  OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const CompanyLocationSection = () => {
  const [{ viewportWidth, viewportHeight }, setviewportDimensions] = useState<ViewportDimensions>({
    viewportWidth: 0,
    viewportHeight: 0
  });
  let layout = '';

  useEffect(() => {
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  const updateViewportDimensions = () => {
    setviewportDimensions({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
  };

  if (viewportWidth < BREAKPOINT_1) {
    layout = 'mv';
  } else if (viewportWidth < BREAKPOINT_2) {
    layout = viewportWidth / viewportHeight > 1 ? 'mh' : 'tv';
  } else {
    layout = 'th';
  }

  if (!(viewportWidth && viewportHeight)) return null;
  return (
    <section className="mx-auto mb-8">
      {
        {
          mv: <IFrameCompanyLocation width={300} height={250} />,
          mh: <IFrameCompanyLocation width={600} height={250} />,
          tv: <IFrameCompanyLocation width={600} height={300} />,
          th: <IFrameCompanyLocation width={900} height={300} />
        }[layout]
      }
    </section>
  );
};

const IFrameCompanyLocation = ({ width, height }: IFrameCompanyLocationProps) => {
  const mapMode = 'place';

  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/${mapMode}?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:${GOOGLE_MAPS_PLACE_ID}`}
      width={width}
      height={height}
      loading="lazy"
      allowFullScreen
      className="shadow-md mx-4"
    ></iframe>
  );
};

const ContactDetailsSection = (): JSX.Element => (
  <section className="px-4 space-y-4">
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center mr-3">
        <Icon path={CLOCK.path} viewBox={CLOCK.viewBox} className="w-5 mr-2" />
        <span className="font-bold whitespace-nowrap">Horaire</span>
      </div>
      <span>Lundi-Vendredi, 09:00-18:00</span>
    </div>
    <div className="flex flex-row items-start">
      <div className="flex flex-row items-center mr-3">
        <Icon path={PLACEHOLDER.path} viewBox={PLACEHOLDER.viewBox} className="w-5 mr-2" />
        <span className="font-bold whitespace-nowrap">Adresse postale</span>
      </div>
      <address>ZAC 4 Saisons, 1 Rue Georges Brassens, 31140 Fonbeauzard</address>
    </div>
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center mr-3">
        <Icon path={PHONE.path} viewBox={PHONE.viewBox} className="w-5 mr-2" />
        <span className="font-bold whitespace-nowrap">Téléphone</span>
      </div>
      <address>06 24 87 53 78</address>
    </div>
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center mr-3">
        <Icon path={EMAIL.path} viewBox={EMAIL.viewBox} className="w-5 mr-2" />
        <span className="font-bold whitespace-nowrap">Email</span>
      </div>
      <address>
        <a href="mailto:contact@terretropicale.com" rel="noreferrer" target="_blank">
          contact@terretropicale.com
        </a>
      </address>
    </div>
  </section>
);

type Sender = {
  name: string;
  email: string;
  phone?: string;
  entity: string;
  message: string;
};

type ModalConfirmationProps = {
  sender: Sender;
  isOpenModalConfirmation: boolean;
  closeModalConfirmation: () => void;
  openModalSuccess: () => void;
  openModalFailure: () => void;
};

type ModalSuccessProps = {
  isOpenModalSuccess: boolean;
  closeModalSuccess: () => void;
};

type ModalFailureProps = {
  isOpenModalFailure: boolean;
  closeModalFailure: () => void;
};

type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

type IFrameCompanyLocationProps = {
  width: number;
  height: number;
};

export { ContactDetailsSection };
export default ContactPage;
