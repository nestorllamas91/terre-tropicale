import Head from 'next/head';
import React from 'react';

import Layout from './layout';

const Contact = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Contact | Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout activePage="/contact">
        <span>Contact</span>
      </Layout>
    </div>
  );
};

export default Contact;
