import Head from 'next/head';

import Layout from '@/app/shared/layout/component';

const Error500 = (): JSX.Element => (
  <div>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <Layout>
      <div className="flex flex-col px-4 pt-4 pb-8 mt-14">
        <div className="flex flex-col mb-4 text-center">
          <span>Error in the server!</span>
          <span>500 Internal Server Error</span>
        </div>
        <div>
          <span>Your request could not be completed because an error has occurred on the server.</span>
        </div>
      </div>
    </Layout>
  </div>
);

export default Error500;
