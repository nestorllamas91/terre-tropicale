import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import CocktailsSection from '@/our-cocktails-page/cocktails-section/component';
import HeaderSection from '@/our-cocktails-page/header-section/component';
import Layout from '@/shared/layout/component';

// Functional component of the page.
const OurCocktailsPage = (): JSX.Element => {
  // Get the text corresponding to the page title.
  const { t } = useTranslation('our-cocktails-page');
  const pageTitle = t('pageTitle');

  // Render the page.
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <CocktailsSection />
      </Layout>
    </>
  );
};

export default OurCocktailsPage;
