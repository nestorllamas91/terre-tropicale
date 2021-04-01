import React from 'react';

import Footer from './footer';
import Header from './header';
import NavigationBar from './navigation-bar';

type LayoutProps = {
  activePage: string;
  children: JSX.Element;
};

const Layout = ({ activePage, children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col">
    <NavigationBar activePage={activePage} />
    <Header activePage={activePage} />
    <div className="flex flex-col pt-4 pb-8 px-4">{children}</div>
    <Footer />
  </div>
);

export default Layout;
