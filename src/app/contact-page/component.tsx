import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import CompanyLocationSection from '@/contact-page/company-location-section/component';
import ContactDetailsSection from '@/contact-page/contact-details-section/component';
import ContactFormSection from '@/contact-page/contact-form-section/component';
import HeaderSection from '@/contact-page/header-section/component';
import IntroductionSection from '@/contact-page/introduction-section/component';
import Layout from '@/shared/layout/component';

// Functional component of the page.
const ContactPage = (): JSX.Element => {
  // Get the text corresponding to the page title.
  const { t } = useTranslation('contact-page');
  const pageTitle = t('pageTitle');

  // Render the page.
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <IntroductionSection />
        <ContactFormSection />
        <CompanyLocationSection />
        <ContactDetailsSection />
      </Layout>
    </>
  );
};

export default ContactPage;
