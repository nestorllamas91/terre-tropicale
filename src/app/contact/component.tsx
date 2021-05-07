import Head from 'next/head';
import Router from 'next/router';
import { MouseEvent, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Button from '@/app/shared/button/component';
import Icon from '@/app/shared/icon/component';
import Layout from '@/app/shared/layout/component';
import { CLOCK, EMAIL, OFFICE, PHONE, SEND } from '@/data/icons.json';

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
  const MySwal = withReactContent(Swal);

  const handleForm = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    MySwal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are going to send this message to the administrator.',
      width: '550px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(async result => {
      if (result.value) {
        try {
          const url = '/api/contact';
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sender)
          });
          if (response.status === 200) {
            MySwal.fire({
              icon: 'success',
              title: 'Message sent!',
              text: 'Your message has been sent to the administrator.',
              width: '550px',
              onClose: () => {
                Router.push('/');
              }
            });
          }
          if (response.status === 500) {
            MySwal.fire({
              icon: 'error',
              title: 'Message not sent!',
              text: 'Your message could not be sent to the administrator.',
              width: '550px'
            });
          }
        } catch {
          MySwal.fire({
            icon: 'error',
            title: 'Message not sent!',
            text: 'Your message could not be sent to the administrator.',
            width: '550px'
          });
        }
      }
    });
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
              className="mt-1 py-1 block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
              className="mt-1 py-1 block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
              className="mt-1 py-1 block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
              className="mt-1 py-1 block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-md border-gray-300 rounded-md"
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
              className="mt-1 py-1 shadow-md block w-full resize-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        <Button action="Envoyer" icon={SEND} onClick={e => handleForm(e)} />
      </form>
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

type Sender = {
  name: string;
  email: string;
  phone?: string;
  entity: string;
  message: string;
};

export { ContactDetailsSection };
export default ContactPage;
