import Head from 'next/head';

import Layout from '@/app/shared/layout/component';

const NosSmoothies = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Nos smoothies | Terre Tropicale</title>
      </Head>
      <Layout>
        <span>Nos smoothies</span>
      </Layout>
    </div>
  );
};

export default NosSmoothies;
