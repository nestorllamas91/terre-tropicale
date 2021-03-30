import React from 'react';

import Footer from '../shared/footer/component';
import Header from '../shared/header/component';
import NavigationBar from '../shared/navigation-bar/component';

type LayoutProps = {
  page: string;
  children: JSX.Element;
};

const Layout = ({ page, children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col">
    <NavigationBar activePage={page} />
    <Header activePage={page} />
    <div className="flex flex-col flex-grow mb-4 p-4">{children}</div>
    <Footer />
  </div>
);

export default Layout;
