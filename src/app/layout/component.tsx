import type { ReactNode } from 'react';
import React from 'react';

import Footer from '@/app/layout/footer/component';
import NavigationBar from '@/app/layout/navigation-bar/component';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <NavigationBar />
    <main className="flex flex-col flex-1 lg:w-248 lg:m-auto">{children}</main>
    <Footer />
  </div>
);

export default Layout;
