import Head from 'next/head';
import React from 'react';

import Footer from './footer';
import NavigationBar from './navigation-bar';

const Error404 = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavigationBar />
      <div className="flex flex-col mt-14 pt-4 pb-8 px-4">
        <div className="flex flex-col mb-4 text-center">
          <span>Error in the client!</span>
          <span>404 Not Found</span>
        </div>
        <div>
          <span>The resource you requested could not be found on the server.</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
