import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import CocktailsSection from '@/our-cocktails-page/cocktails-section/component';
import HeaderSection from '@/our-cocktails-page/header-section/component';
import Layout from '@/shared/layout/component';

const OurCocktailsPage = (): JSX.Element => {
  const { t } = useTranslation('our-cocktails-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <CocktailsSection />
      </Layout>
    </>
  );
};

export default OurCocktailsPage;
