import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import BenefitsSection from '@/home-page/benefits-section/component';
import FruitsSection from '@/home-page/fruits-section/component';
import HeaderSection from '@/home-page/header-section/component';
import ServicesSection from '@/home-page/services-section/component';
import ValuesSection from '@/home-page/values-section/component';
import Layout from '@/shared/layout/component';

// Functional component of the page.
const HomePage = (): JSX.Element => {
  // Get the text corresponding to the page title.
  const { t } = useTranslation('home-page');
  const pageTitle = t('pageTitle');

  // Render the page.
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <ServicesSection />
        <ValuesSection />
        <BenefitsSection />
        <FruitsSection />
      </Layout>
    </>
  );
};

export default HomePage;
