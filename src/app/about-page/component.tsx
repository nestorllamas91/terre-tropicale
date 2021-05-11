import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import HeaderSection from '@/app/about-page/header-section/component';
import QuiSommesNousSection from '@/app/about-page/qui-sommes-nous-section/component';
import ValuesSection from '@/app/home-page/values-section/component';
import Layout from '@/app/shared/layout/component';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <QuiSommesNousSection />
        <ValuesSection />
      </Layout>
    </>
  );
};

export default AboutPage;
