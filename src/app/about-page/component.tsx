import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import HeaderSection from '@/about-page/header-section/component';
import QuiSommesNousSection from '@/about-page/qui-sommes-nous-section/component';
import Layout from '@/shared/layout/component';

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
      </Layout>
    </>
  );
};

export default AboutPage;
