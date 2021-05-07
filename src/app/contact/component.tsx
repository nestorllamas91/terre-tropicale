import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, MouseEvent, useRef, useState } from 'react';

import Icon from '@/app/shared/icon/component';
import Layout from '@/app/shared/layout/component';
import { CLOCK, EMAIL, ERROR, OFFICE, PHONE, SUCCESS, WARNING } from '@/data/icons.json';
//
const ContactPage = (): JSX.Element => (
  <>
    <Head>
      <title>Contact | Terre Tropicale</title>
    </Head>
    <Layout>
      <Header />
      <div className="px-4">
        <IntroSection />
        <ContactFormSection />
        <div className="flex justify-center mb-8">
          <ContactDetailsSection />
        </div>
      </div>
    </Layout>
  </>
);

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/headers/header-3.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
    <div className="absolute flex flex-col items-start justify-center w-full h-full px-3 py-4 text-white bg-black bg-opacity-40 tv:px-10 tv:py-24 mh:px-10 mh:py-24 th:px-20">
      <h1 className="mb-2">CONTACT</h1>
      <p className="page-subtitle">Restons en contact</p>
      <p className="page-subtitle">Inscrivez-vous pour une degustation gratuite</p>
    </div>
  </header>
);

const IntroSection = () => (
  <section className="mb-8">
    <p>
      Vous êtes intéressé par nos produits et/ou services et vous souhaitez être contacté? N&rsquo;hesitez pas à nous
      écrire. Nous vous contacterons dans les plus bref délais.
    </p>
  </section>
);

const ContactFormSection = () => {
  const [sender, setSender] = useState<Sender>({
    name: '',
    email: '',
    phone: '',
    entity: 'Particulier',
    message: ''
  });
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpenConfirmation(true);
  };

  return (
    <section className="mb-8 mh:w-1/2 mh:mx-auto tv:w-1/2 tv:mx-auto th:w-1/2 th:mx-auto">
      <form>
        <div className="space-y-3 mb-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-lime-600">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={event => setSender({ ...sender, name: event.target.value })}
              className="mt-1 py-1 block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-lime-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
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
              required
              onChange={event => setSender({ ...sender, entity: event.target.value })}
              className="mt-1 py-1 block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow border-gray-300 rounded-md"
            >
              <option value="Particulier" selected>
                Particulier
              </option>
              <option value="Professionnel">Professionnel</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-lime-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              defaultValue=""
              required
              onChange={event => setSender({ ...sender, message: event.target.value })}
              className="mt-1 py-1 shadow block w-full resize-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button onClick={e => handleSend(e)} className="button">
          Envoyer
        </button>
      </form>
      {isOpenConfirmation && (
        <ModalConfirmation
          sender={sender}
          isOpenConfirmation={isOpenConfirmation}
          closeConfirmation={() => setIsOpenConfirmation(false)}
          handleOpenSuccess={() => setIsOpenSuccess(true)}
          handleOpenError={() => setIsOpenError(true)}
        />
      )}
      {isOpenSuccess && <ModalSuccess isOpenSuccess={isOpenSuccess} closeSuccess={() => setIsOpenSuccess(false)} />}
      {isOpenError && <ModalError isOpenError={isOpenError} closeError={() => setIsOpenError(false)} />}
    </section>
  );
};

const ContactDetailsSection = (): JSX.Element => (
  <section className="space-y-4">
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center mr-3">
        <Icon path={CLOCK.path} viewBox={CLOCK.viewBox} className="w-5 mr-2" />
        <span className="font-bold whitespace-nowrap">Horaire</span>
      </div>
      <span>Lundi-Vendredi, 09:00-18:00</span>
    </div>
    <div className="flex flex-row items-start">
      <div className="flex flex-row items-center mr-3">
        <Icon path={OFFICE.path} viewBox={OFFICE.viewBox} className="w-5 mr-2" />
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

const ModalConfirmation = ({
  sender,
  isOpenConfirmation,
  closeConfirmation,
  handleOpenSuccess,
  handleOpenError
}: ModalConfirmationProps) => {
  const refButtonCancel = useRef<HTMLButtonElement>(null);

  const handleConfirm = async (action: boolean) => {
    closeConfirmation();
    if (action) {
      try {
        const url = '/api/contact';
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sender)
        });
        if (response.status === 200) {
          handleOpenSuccess();
        }
        if (response.status === 500) {
          handleOpenError();
        }
      } catch {
        handleOpenError();
      }
    }
  };

  return (
    <Transition.Root show={isOpenConfirmation} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonCancel} open={isOpenConfirmation} onClose={closeConfirmation}>
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
            <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-all">
              <div className="px-6 py-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                  <Icon path={WARNING.path} viewBox={WARNING.viewBox} className="w-7 fill-current text-orange-400" />
                </div>
                <div className="mt-2 text-center">
                  <Dialog.Title as="h3">Êtes-vous sûr?</Dialog.Title>
                  <p className="mt-1 text-sm text-gray-500">Vous allez envoyer ce message à l&rsquo;administrateur.</p>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 space-x-4 bg-gray-100">
                <button
                  ref={refButtonCancel}
                  onClick={() => handleConfirm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Annuler
                </button>
                <button
                  onClick={() => handleConfirm(true)}
                  className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

const ModalSuccess = ({ isOpenSuccess, closeSuccess }: ModalSuccessProps) => {
  const refButtonOk = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleOk = () => {
    closeSuccess();
    router.push('/');
  };

  return (
    <Transition.Root show={isOpenSuccess} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonOk} open={isOpenSuccess} onClose={handleOk}>
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
            <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-all">
              <div className="px-6 py-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <Icon path={SUCCESS.path} viewBox={SUCCESS.viewBox} className="w-7 fill-current text-green-400" />
                </div>
                <div className="mt-2 text-center">
                  <Dialog.Title as="h3">Message envoyé!</Dialog.Title>
                  <p className="mt-1 text-sm text-gray-500">Votre message a été envoyé à l&rsquo;administrateur.</p>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 space-x-4 bg-gray-100">
                <button
                  ref={refButtonOk}
                  onClick={handleOk}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

const ModalError = ({ isOpenError, closeError }: ModalErrorProps) => {
  const refButtonOk = useRef<HTMLButtonElement>(null);

  const handleOk = () => {
    closeError();
  };

  return (
    <Transition.Root show={isOpenError} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonOk} open={isOpenError} onClose={closeError}>
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
            <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-all">
              <div className="px-6 py-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <Icon path={ERROR.path} viewBox={ERROR.viewBox} className="w-7 fill-current text-red-400" />
                </div>
                <div className="mt-2 text-center">
                  <Dialog.Title as="h3">Message non envoyé!</Dialog.Title>
                  <p className="mt-1 text-sm text-gray-500">
                    Votre message n&rsquo;a pas pu être envoyé à l&rsquo;administrateur.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 space-x-4 bg-gray-100">
                <button
                  ref={refButtonOk}
                  onClick={handleOk}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

type Sender = {
  name: string;
  email: string;
  phone?: string;
  entity: string;
  message: string;
};

type ModalConfirmationProps = {
  sender: Sender;
  isOpenConfirmation: boolean;
  closeConfirmation: () => void;
  handleOpenSuccess: () => void;
  handleOpenError: () => void;
};

type ModalSuccessProps = {
  isOpenSuccess: boolean;
  closeSuccess: () => void;
};

type ModalErrorProps = {
  isOpenError: boolean;
  closeError: () => void;
};

export { ContactDetailsSection };
export default ContactPage;
