import Head from 'next/head';

import Layout from '../layout/component';

const NosCocktails = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Nos cocktails | Terre Tropicale</title>
      </Head>
      <Layout>
        <span>Nos cocktails</span>
      </Layout>
    </div>
  );
};

export default NosCocktails;
