import Head from 'next/head';
import React from 'react';

import Layout from './layout';

const NosCocktails = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Nos cocktails | Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout activePage="/nos-cocktails">
        <span>Nos cocktails</span>
      </Layout>
    </div>
  );
};

export default NosCocktails;
