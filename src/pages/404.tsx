import NavigationBar from '../shared/navigation-bar/component';
import Footer from '../shared/footer/component';

export default function Error404Page(): JSX.Element {
  return (
    <div>
      <NavigationBar />
      <div>
        <span>Error in the client!</span>
        <span>404 Not Found</span>
      </div>
      <div>
        <span>The resource you requested could not be found on the server.</span>
      </div>
      <Footer />
    </div>
  );
}
