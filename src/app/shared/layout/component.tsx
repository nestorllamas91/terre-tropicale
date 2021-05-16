import type { ReactNode } from 'react';
import React from 'react';

import Footer from '@/shared/layout/footer/component';
import Menu from '@/shared/layout/menu/component';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col h-screen">
    <Menu />
    <main className="flex flex-col flex-1 pt-20 mh:pt-20 tv:pt-24 th:pt-24 xl:pt-24 th:w-248 th:m-auto">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
