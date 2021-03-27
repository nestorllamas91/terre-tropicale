import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../layout/component';
import { getTitle } from '../_shared/functions';
import '../styles-reset.css';
import '../styles-global.css';

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const arraySubstringsPathname: string[] = router.pathname.split('/');
  const page: string = arraySubstringsPathname.length === 2 ? arraySubstringsPathname[1] : '';
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
}
