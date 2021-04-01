import Head from 'next/head';
import React from 'react';

import Layout from './layout';

const NosSmoothies = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Nos smoothies | Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout activePage="/nos-smoothies">
        <span>Nos smoothies</span>
      </Layout>
    </div>
  );
};

export default NosSmoothies;
