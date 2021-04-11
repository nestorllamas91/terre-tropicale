import Head from 'next/head';

import Layout from '@/app/shared/layout/component';

const APropos = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>À propos | Terre Tropicale</title>
      </Head>
      <Layout>
        <span>À propos</span>
      </Layout>
    </div>
  );
};

export default APropos;
