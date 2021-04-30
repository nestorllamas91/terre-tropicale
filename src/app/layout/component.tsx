import type { ReactNode } from 'react';
import React from 'react';

import Footer from '@/app/layout/footer/component';
import NavigationBar from '@/app/layout/navigation-bar/component';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col min-h-screen lg:w-248 lg:m-auto">
    <NavigationBar />
    <main className="flex flex-col flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
