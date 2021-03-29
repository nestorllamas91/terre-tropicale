import NavigationBar from '../shared/navigation-bar/component';
import Header from '../shared/header/component';
import Footer from '../shared/footer/component';

type LayoutProps = {
  page: string;
  children: JSX.Element;
};

export default function Layout({ page, children }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <NavigationBar activePage={page} />
      <Header activePage={page} />
      <div className="flex flex-col flex-grow mb-4 p-4">{children}</div>
      <Footer />
    </div>
  );
}
