import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Layout from '@/shared/layout/component';

const Error404Page = (): JSX.Element => {
  const { t } = useTranslation('error-404-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center px-4 pb-4 mq1:w-5/6 mq1:mx-auto mq1:px-8 mq1:pb-8 mq2:w-2/3 mq2:mx-auto mq3:w-160 mq3:mx-auto">
          <div className="mb-10 px-4 pt-8 pb-4 gap-y-4 text-center">
            <h1>{t('error-heading')}</h1>
            <p>{t('error-body')}</p>
          </div>
          <img src="/assets/images/misc/error-404.svg" className="w-full mq1:w-3/4" />
        </div>
      </Layout>
    </>
  );
};

export default Error404Page;
