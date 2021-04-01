import Head from 'next/head';
import React from 'react';

import Layout from './layout';

const Accueil = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout activePage="/">
        <span>Accueil</span>
      </Layout>
    </div>
  );
};

export default Accueil;
