import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import CompanyLocationSection from '@/app/contact-page/company-location-section/component';
import ContactDetailsSection from '@/app/contact-page/contact-details-section/component';
import ContactFormSection from '@/app/contact-page/contact-form-section/component';
import HeaderSection from '@/app/contact-page/header-section/component';
import IntroSection from '@/app/contact-page/intro-section/component';
import Layout from '@/app/shared/layout/component';

const ContactPage = (): JSX.Element => {
  const { t } = useTranslation('contact-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <IntroSection />
        <ContactFormSection />
        <CompanyLocationSection />
        <div className="flex justify-center mb-8">
          <ContactDetailsSection />
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
