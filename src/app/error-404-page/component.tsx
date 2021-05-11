import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Layout from '@/app/shared/layout/component';

const Error404Page = (): JSX.Element => {
  const { t } = useTranslation('error-404-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center">
          <div className="mb-10 px-4 pt-8 pb-4 space-y-4 text-center">
            <h1>{t('error-heading')}</h1>
            <p>{t('error-body')}</p>
          </div>
          <img src="/assets/images/misc/error-404.svg" className="w-2/3" />
        </div>
      </Layout>
    </>
  );
};

export default Error404Page;
