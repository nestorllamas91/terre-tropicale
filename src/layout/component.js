import React, { Fragment } from 'react';
import NavigationBar from '../_shared/navigation-bar/component';
import Header from '../_shared/header/component';
import Footer from '../_shared/footer/component';

export default function Layout({ page, children }) {
  return (
    <Fragment>
      <NavigationBar activePage={page} />
      {page === '/_error' ? (
        <div>{children}</div>
      ) : (
        <Fragment>
          <Header activePage={page} />
          <div>{children}</div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
}
