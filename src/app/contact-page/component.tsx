import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import CompanyLocationSection from '@/contact-page/company-location-section/component';
import ContactDetailsSection from '@/contact-page/contact-details-section/component';
import ContactFormSection from '@/contact-page/contact-form-section/component';
import HeaderSection from '@/contact-page/header-section/component';
import IntroSection from '@/contact-page/intro-section/component';
import Layout from '@/shared/layout/component';

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
