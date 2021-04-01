import Head from 'next/head';
import React from 'react';

import Footer from './footer';
import NavigationBar from './navigation-bar';

const Error500 = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Terre Tropicale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavigationBar />
      <div className="flex flex-col mt-14 pt-4 pb-8 px-4">
        <div className="flex flex-col mb-4 text-center">
          <span>Error in the server!</span>
          <span>500 Internal Server Error</span>
        </div>
        <div>
          <span>Your request could not be completed because an error has occurred on the server.</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error500;
