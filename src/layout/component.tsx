import React from 'react';

import Footer from '../shared/footer/component';
import Header from '../shared/header/component';
import NavigationBar from '../shared/navigation-bar/component';

type LayoutProps = {
  page: string;
  children: JSX.Element;
};

const Layout = ({ page, children }: LayoutProps): JSX.Element => (
  <>
    <NavigationBar activePage={page} />
    <Header activePage={page} />
    {children}
    <Footer />
  </>
);

export default Layout;
