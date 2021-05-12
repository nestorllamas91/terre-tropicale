import '@/shared/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import Maintenance from '@/maintenance-page/component';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {!!process.env.NEXT_PUBLIC_MAINTENANCE_MODE === true ? <Maintenance /> : <Component {...pageProps} />}
  </>
);

export default appWithTranslation(App);
