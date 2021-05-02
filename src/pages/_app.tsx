import '@/app/styles/index.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import Maintenance from '@/app/maintenance/component';

const updateViewportHeight = () => {
  const viewportHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${viewportHeight}px`);
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    document.querySelector('#jss-server-side')?.remove();
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {!!process.env.NEXT_PUBLIC_MAINTENANCE_MODE === true ? <Maintenance /> : <Component {...pageProps} />}
    </>
  );
};

export default App;
