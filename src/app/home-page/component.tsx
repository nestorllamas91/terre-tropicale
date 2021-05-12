import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import BenefitsSection from '@/home-page/benefits-section/component';
import FruitsSection from '@/home-page/fruits-section/component';
import HeaderSection from '@/home-page/header-section/component';
import ServicesSection from '@/home-page/services-section/component';
import ValuesSection from '@/home-page/values-section/component';
import Layout from '@/shared/layout/component';

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('home-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
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
