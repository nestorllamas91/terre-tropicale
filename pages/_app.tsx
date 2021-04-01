// eslint-disable-next-line import/no-internal-modules
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.remove();
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
