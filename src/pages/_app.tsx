import '../styles-reset.css';
import '../styles-global.css';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';

import Layout from '../layout/component';
import { getTitle } from '../shared/functions';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const arraySubstringsPathname: string[] = router.pathname.split('/');
  const page: string = arraySubstringsPathname.length === 2 ? arraySubstringsPathname[1] : '';

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.remove();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{getTitle(page)}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout page={page}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
