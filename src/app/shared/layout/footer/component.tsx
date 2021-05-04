import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ContactDetailsSection } from '@/app/contact/component';
import Icon from '@/app/shared/icon/component';
import { FACEBOOK, INSTAGRAM, TWITTER } from '@/data/icons.json';

const useStyles = makeStyles({
  buttonLabel: {
    fontFamily: 'Lato Regular',
    fontWeight: 400,
    fontSize: '14px',
    color: 'white'
  },
  buttonRoot: {
    backgroundColor: '#84cc16',
    '&:hover': {
      backgroundColor: '#65a30d'
    }
  }
});

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
  const classes = useStyles();

  return (
    <div className="flex flex-col items-center px-4 mb-8">
      <h2 className="mb-4 text-center">VOUS ÊTES INTÉRESSÉ</h2>
      <p className="mb-3">Inscrivez-vous pour une degustation gratuite</p>
      <Link href="/contact">
        <Button variant="contained" classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}>
          Demandez votre devis maintenant
        </Button>
      </Link>
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
