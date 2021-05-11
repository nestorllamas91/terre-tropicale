import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import BenefitsSection from '@/app/home-page/benefits-section/component';
import FruitsSection from '@/app/home-page/fruits-section/component';
import HeaderSection from '@/app/home-page/header-section/component';
import ServicesSection from '@/app/home-page/services-section/component';
import ValuesSection from '@/app/home-page/values-section/component';
import Layout from '@/app/shared/layout/component';

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
