import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Layout from '@/shared/layout/component';

const Error500Page = (): JSX.Element => {
  const { t } = useTranslation('error-500-page');

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center px-4 pb-4 mh:w-5/6 mh:mx-auto mh:px-8 mh:pb-8 tv:w-2/3 tv:mx-auto th:w-160 th:mx-auto">
          <div className="mb-10 px-4 pt-8 pb-4 gap-y-4 text-center">
            <h1>{t('error-heading')}</h1>
            <p>{t('error-body')}</p>
          </div>
          <img src="/assets/images/misc/error-500.svg" className="w-full mh:w-3/4" />
        </div>
      </Layout>
    </>
  );
};

export default Error500Page;
