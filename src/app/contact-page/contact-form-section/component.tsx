import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { FormEvent, Fragment, useRef, useState } from 'react';

import CloseIcon from '@/shared/icons/close';
import FailureIcon from '@/shared/icons/failure';
import SuccessIcon from '@/shared/icons/success';
import WarningIcon from '@/shared/icons/warning';

type Sender = {
  name: string;
  email: string;
  phone?: string;
  entity: string;
  message: string;
};

type ConfirmationModalProps = {
  sender: Sender;
  isOpenConfirmationModal: boolean;
  closeConfirmationModal: () => void;
  openSuccessModal: () => void;
  openFailureModal: () => void;
};

type SuccessModalProps = {
  isOpenSuccessModal: boolean;
  closeSuccessModal: () => void;
};

type FailureModalProps = {
  isOpenFailureModal: boolean;
  closeFailureModal: () => void;
};

const senderInitialValue = {
  name: '',
  email: '',
  phone: '',
  entity: 'Particulier',
  message: ''
};

const ContactFormSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');
  const [sender, setSender] = useState<Sender>(senderInitialValue);
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenFailureModal, setIsOpenFailureModal] = useState(false);
  const { name, email, phone, entity, message } = sender;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpenConfirmationModal(true);
  };

  const openSuccessModal = () => {
    setSender(senderInitialValue);
    setIsOpenSuccessModal(true);
  };

  const openFailureModal = () => {
    setIsOpenFailureModal(true);
  };

  return (
    <section className="px-4 mh:w-1/2 mh:mx-auto tv:w-1/2 tv:mx-auto th:w-1/2 th:mx-auto">
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col">
        <div className="gap-y-3 mb-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-lime-600">
              {t('contact-form-name-label')} <span className="text-red-500">*</span>
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
              {t('contact-form-email-label')} <span className="text-red-500">*</span>
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
              {t('contact-form-phone-label')}
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
              {t('contact-form-entity-label')}
            </label>
            <select
              id="entity"
              name="entity"
              value={entity}
              onChange={event => setSender({ ...sender, entity: event.target.value })}
              className="mt-1 py-1 block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow border-gray-300 rounded-md"
            >
              <option value="Particulier">{t('contact-form-entity-option-1')}</option>
              <option value="Professionnel">{t('contact-form-entity-option-2')}</option>
              <option value="Enterprise">{t('contact-form-entity-option-3')}</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-lime-600">
              {t('contact-form-message-label')} <span className="text-red-500">*</span>
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
      {isOpenConfirmationModal && (
        <ConfirmationModal
          sender={sender}
          isOpenConfirmationModal={isOpenConfirmationModal}
          closeConfirmationModal={() => setIsOpenConfirmationModal(false)}
          openSuccessModal={openSuccessModal}
          openFailureModal={openFailureModal}
        />
      )}
      {isOpenSuccessModal && (
        <SuccessModal isOpenSuccessModal={isOpenSuccessModal} closeSuccessModal={() => setIsOpenSuccessModal(false)} />
      )}
      {isOpenFailureModal && (
        <FailureModal isOpenFailureModal={isOpenFailureModal} closeFailureModal={() => setIsOpenFailureModal(false)} />
      )}
    </section>
  );
};

const ConfirmationModal = ({
  sender,
  isOpenConfirmationModal,
  closeConfirmationModal,
  openSuccessModal,
  openFailureModal
}: ConfirmationModalProps) => {
  const { t } = useTranslation('contact-page');
  const refButtonConfirm = useRef<HTMLButtonElement>(null);

  const handleConfirm = async () => {
    closeConfirmationModal();
    try {
      const url = '/api/contact-page';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sender)
      });
      if (response.status === 200) {
        openSuccessModal();
      }
      if (response.status === 500) {
        openFailureModal();
      }
    } catch {
      openFailureModal();
    }
  };

  return (
    <Transition.Root show={isOpenConfirmationModal} as={Fragment}>
      <Dialog
        as="div"
        static
        initialFocus={refButtonConfirm}
        open={isOpenConfirmationModal}
        onClose={closeConfirmationModal}
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
            <div className="flex flex-col rounded-lg shadow overflow-hidden bg-white transform transition-all">
              <button
                onClick={closeConfirmationModal}
                className="self-end ml-auto mr-2 mt-2 p-2 rounded hover:bg-lime-300 focus:outline-none"
              >
                <CloseIcon className="w-4" />
              </button>
              <div className="px-6 pt-2 pb-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                  <WarningIcon className="w-7 fill-current text-orange-400" />
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <Dialog.Title as="span" className="font-semibold">
                    {t('contact-form-confirmation-modal-heading')}
                  </Dialog.Title>
                  <span className="mt-1 text-sm text-gray-500">{t('contact-form-confirmation-modal-body')}</span>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 bg-gray-100">
                <button
                  ref={refButtonConfirm}
                  onClick={handleConfirm}
                  className="px-4 py-1.5 border border-transparent rounded-md shadow text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"
                >
                  {t('contact-form-confirmation-modal-button')}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const SuccessModal = ({ isOpenSuccessModal, closeSuccessModal }: SuccessModalProps) => {
  const { t } = useTranslation('contact-page');
  const refButtonOk = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={isOpenSuccessModal} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonOk} open={isOpenSuccessModal} onClose={closeSuccessModal}>
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
            <div className="flex flex-col rounded-lg shadow overflow-hidden bg-white transform transition-all">
              <button
                onClick={closeSuccessModal}
                className="self-end ml-auto mr-2 mt-2 p-2 rounded hover:bg-lime-300 focus:outline-none"
              >
                <CloseIcon className="w-4" />
              </button>
              <div className="px-6 pt-2 pb-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <SuccessIcon className="w-7 fill-current text-green-400" />
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <Dialog.Title as="span" className="font-semibold">
                    {t('contact-form-success-modal-heading')}
                  </Dialog.Title>
                  <span className="mt-1 text-sm text-gray-500">{t('contact-form-success-modal-body')}</span>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 bg-gray-100">
                <button
                  ref={refButtonOk}
                  onClick={closeSuccessModal}
                  className="px-4 py-1.5 border border-gray-300 rounded-md shadow text-black bg-white hover:bg-gray-50 focus:outline-none"
                >
                  {t('contact-form-success-modal-button')}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const FailureModal = ({ isOpenFailureModal, closeFailureModal }: FailureModalProps) => {
  const { t } = useTranslation('contact-page');
  const refButtonOk = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={isOpenFailureModal} as={Fragment}>
      <Dialog as="div" static initialFocus={refButtonOk} open={isOpenFailureModal} onClose={closeFailureModal}>
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
            <div className="flex flex-col rounded-lg shadow overflow-hidden bg-white transform transition-all">
              <button
                onClick={closeFailureModal}
                className="self-end ml-auto mr-2 mt-2 p-2 rounded hover:bg-lime-300 focus:outline-none"
              >
                <CloseIcon className="w-4" />
              </button>
              <div className="px-6 pt-2 pb-5 bg-white">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <FailureIcon className="w-7 fill-current text-red-400" />
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <Dialog.Title as="span" className="font-semibold">
                    {t('contact-form-failure-modal-heading')}
                  </Dialog.Title>
                  <span className="mt-1 text-sm text-gray-500">{t('contact-form-failure-modal-body')}</span>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-3 bg-gray-100">
                <button
                  ref={refButtonOk}
                  onClick={closeFailureModal}
                  className="px-4 py-1.5 border border-gray-300 rounded-md shadow text-black bg-white hover:bg-gray-50 focus:outline-none"
                >
                  {t('contact-form-failure-modal-button')}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ContactFormSection;
