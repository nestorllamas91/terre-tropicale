import type { ReactNode } from 'react';

import Footer from '@/app/shared/layout/footer/component';
import NavigationBar from '@/app/shared/layout/navigation-bar/component';

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropsType): JSX.Element => (
  <>
    <NavigationBar />
    <div className=" flex flex-col mt-14">{children}</div>
    <Footer />
  </>
);

export default Layout;
