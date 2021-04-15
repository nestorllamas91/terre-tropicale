import '@/app/shared/styles.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);
  return <Component {...pageProps} />;
};

export default App;
