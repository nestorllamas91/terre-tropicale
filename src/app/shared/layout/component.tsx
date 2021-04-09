import Footer from '@/app/shared/layout/footer/component';
import NavigationBar from '@/app/shared/layout/navigation-bar/component';
import type { WithChildren } from '@/app/shared/types';

type LayoutProps = WithChildren;

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col">
    <NavigationBar />
    <div className="flex flex-col pt-14">{children}</div>
    <Footer />
  </div>
);

export default Layout;
