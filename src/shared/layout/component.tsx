import type { ReactNode } from 'react';
import React from 'react';

import Footer from '@/shared/layout/footer/component';
import Menus from '@/shared/layout/menus/component';
import styles from '@/shared/layout/styles.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <div className={styles.layout}>
      <Menus />
      <main>{children}</main>
      <Footer />
    </div>
    <div id="modal-root"></div>
  </>
);

export default Layout;
