import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import HeaderSection from '@/our-smoothies-page/header-section/component';
import SmoothiesSection from '@/our-smoothies-page/smoothies-section/component';
import Layout from '@/shared/layout/component';

const OurSmoothiesPage = (): JSX.Element => {
  const { t } = useTranslation('our-smoothies-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <SmoothiesSection />
      </Layout>
    </>
  );
};

export default OurSmoothiesPage;
