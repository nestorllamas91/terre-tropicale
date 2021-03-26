import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../layout/component';
import { getTitle } from '../_shared/functions';
import '../styles-global.css';
import '../styles-reset.css';

function App({ Component, pageProps, router }) {
  const page = router.pathname;
  const { titleTab } = getTitle(page);
  return (
    <Fragment>
      <Head>
        <title>{titleTab}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout page={page}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;
