import React from 'react';

import Footer from '../shared/footer/component';
import NavigationBar from '../shared/navigation-bar/component';

const Error404Page = (): JSX.Element => (
  <div>
    <NavigationBar />
    <div>
      <span>Error in the client!</span>
      <span>404 Not Found</span>
    </div>
    <div>
      <span>The resource you requested could not be found on the server.</span>
    </div>
    <Footer />
  </div>
);

export default Error404Page;
