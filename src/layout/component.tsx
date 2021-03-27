import NavigationBar from '../_shared/navigation-bar/component';
import Header from '../_shared/header/component';
import Footer from '../_shared/footer/component';

type LayoutProps = {
  page: string;
  children: JSX.Element;
};

export default function Layout({ page, children }: LayoutProps): JSX.Element {
  return (
    <>
      <NavigationBar activePage={page} />
      <Header activePage={page} />
      {children}
      <Footer />
    </>
  );
}
