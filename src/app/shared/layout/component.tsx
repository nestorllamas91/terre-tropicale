import type { ReactNode } from 'react';
import React from 'react';

import Footer from '@/app/shared/layout/footer/component';
import Menu from '@/app/shared/layout/menu/component';

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <Menu />
    <main className="flex flex-col flex-1 pt-24 th:w-248 th:m-auto">{children}</main>
    <Footer />
  </div>
);

type LayoutProps = {
  children: ReactNode;
};

export default Layout;
