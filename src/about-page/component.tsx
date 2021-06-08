import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import HeaderSection from '@/about-page/header-section/component';
import WhoWeAreSection from '@/about-page/who-we-are-section/component';
import Layout from '@/shared/layout/component';

// Functional component of the page.
const AboutPage = (): JSX.Element => {
  // Get the text corresponding to the page title.
  const { t } = useTranslation('about-page');
  const pageTitle = t('pageTitle');

  // Render the page.
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <HeaderSection />
        <WhoWeAreSection />
      </Layout>
    </>
  );
};

export default AboutPage;
