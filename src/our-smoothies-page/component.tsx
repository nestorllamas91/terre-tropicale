import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import HeaderSection from '@/our-smoothies-page/header-section/component';
import SmoothiesSection from '@/our-smoothies-page/smoothies-section/component';
import Layout from '@/shared/layout/component';

// Functional component of the page.
const OurSmoothiesPage = (): JSX.Element => {
  // Get the text corresponding to the page title.
  const { t } = useTranslation('our-smoothies-page');
  const pageTitle = t('pageTitle');

  // Render the page.
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <SmoothiesSection />
      </Layout>
    </>
  );
};

export default OurSmoothiesPage;
