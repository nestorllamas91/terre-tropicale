import Head from 'next/head';

import Layout from '@/app/layout/component';

const Error404 = (): JSX.Element => (
  <div>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <Layout>
      <div className="flex flex-col mt-14 pt-4 pb-8 px-4">
        <div className="flex flex-col mb-4 text-center">
          <span>Error in the client!</span>
          <span>404 Not Found</span>
        </div>
        <div>
          <span>The resource you requested could not be found on the server.</span>
        </div>
      </div>
    </Layout>
  </div>
);

export default Error404;
