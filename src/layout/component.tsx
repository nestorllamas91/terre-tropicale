import type { WithChildren } from '../types';
import Footer from './footer/component';
import NavigationBar from './navigation-bar/component';

type LayoutProps = WithChildren;

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col">
    <NavigationBar />
    <div className="flex flex-col pt-14">{children}</div>
    <Footer />
  </div>
);

export default Layout;
