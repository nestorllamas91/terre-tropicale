import React from 'react';

import Footer from '../shared/footer/component';
import NavigationBar from '../shared/navigation-bar/component';

const Error500Page = (): JSX.Element => (
  <div>
    <NavigationBar />
    <div>
      <span>Error in the server!</span>
      <span>500 Internal Server Error</span>
    </div>
    <div>
      <span>Your request could not be completed because an error has occurred on the server.</span>
    </div>
    <Footer />
  </div>
);

export default Error500Page;
