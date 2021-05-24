import type { ReactNode } from 'react';
import React from 'react';

import Footer from '@/shared/layout/footer/component';
import Menu from '@/shared/layout/menu/component';
import styles from '@/shared/layout/styles.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <div className={styles.layout}>
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
    <div id="modal-root"></div>
  </>
);

export default Layout;
