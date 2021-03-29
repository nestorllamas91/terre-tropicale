import NavigationBar from '../shared/navigation-bar/component';
import Footer from '../shared/footer/component';

export default function Error500Page(): JSX.Element {
  return (
    <div>
      <NavigationBar />
      <div>
        <span>Error in the server!</span>
        <span>500 Internal Server Error</span>
      </div>
      <div>
        <span>Your request could not be completed because an error has occurred on the server.</span>
      </div>
      <Footer />
    </div>
  );
}
