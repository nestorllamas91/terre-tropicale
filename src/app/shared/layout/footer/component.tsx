import { useRouter } from 'next/router';

import { ContactDetailsSection } from '@/app/contact/component';
import Button from '@/app/shared/button/component';
import Icon from '@/app/shared/icon/component';
import { CONTACT, FACEBOOK, INSTAGRAM, TWITTER } from '@/data/icons.json';

const Footer = (): JSX.Element => {
  const activePage = useRouter().asPath;

  return (
    <footer>
      {activePage !== '/contact' && <Footer1 />}
      <Footer2 />
    </footer>
  );
};

const Footer1 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center px-4 mb-8">
      <h2 className="mb-4 text-center">VOUS ÊTES INTÉRESSÉ</h2>
      <p className="mb-3">Inscrivez-vous pour une degustation gratuite</p>
      <Button action="Demandez votre devis maintenant" icon={CONTACT} onClick={() => router.push('/contact')} />
      <div className="mt-6">
        <ContactDetailsSection />
      </div>
    </div>
  );
};

const Footer2 = () => (
  <div className="flex flex-col items-center px-4 py-3 bg-lime-100">
    <img src="/assets/logo/symbol.svg" className="h-12 mb-2" />
    <SocialMedia />
    <span>&copy; {new Date().getFullYear()} Terre Tropicale</span>
  </div>
);

const SocialMedia = () => (
  <div className="flex flex-row items-center mb-2">
    <a
      href="https://twitter.com/TerreTropicale"
      rel="noreferrer"
      target="_blank"
      className="mr-5 text-current hover:text-lime-600"
    >
      <Icon path={TWITTER.path} viewBox={TWITTER.viewBox} className="h-6" />
    </a>
    <a
      href="https://www.facebook.com/terretropicale"
      rel="noreferrer"
      target="_blank"
      className="mr-5 text-current hover:text-lime-600"
    >
      <Icon path={FACEBOOK.path} viewBox={FACEBOOK.viewBox} className="h-6" />
    </a>
    <a
      href="https://www.instagram.com/terretropicale"
      rel="noreferrer"
      target="_blank"
      className="text-current hover:text-lime-600"
    >
      <Icon path={INSTAGRAM.path} viewBox={INSTAGRAM.viewBox} className="h-6" />
    </a>
  </div>
);

export default Footer;
