import Head from 'next/head';
import React from 'react';

import Layout from './layout';

const APropos = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>À propos| Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout activePage="/a-propos">
        <span>À propos</span>
      </Layout>
    </div>
  );
};

export default APropos;
