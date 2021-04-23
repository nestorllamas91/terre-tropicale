import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ContactDetailsSection } from '@/app/contact/component';

const useStyles = makeStyles({
  buttonLabel: {
    fontFamily: 'Montserrat SemiBold',
    fontWeight: 600,
    fontSize: '10px',
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
    <div className="flex flex-col items-center px-4 py-3 bg-gray-100">
      <h1 className="mb-1">VOUS ÊTES INTÉRESSÉ</h1>
      <p className="mb-2">Inscrivez-vous pour une degustation gratuite</p>
      <Link href="/contact">
        <Button variant="contained" classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}>
          Demandez votre devis maintenant
        </Button>
      </Link>
      <div className="mt-4">
        <ContactDetailsSection />
      </div>
    </div>
  );
};

const Footer2 = () => (
  <div className="flex flex-col items-center px-4 py-3 bg-blueGray-200">
    <img src="/assets/logo/symbol.svg" className="mb-1 h-12" />
    <SocialMedia />
    <span className="text-sm">&copy; {new Date().getFullYear()} Terre Tropicale</span>
    <span className="text-xs">
      Icons made by{' '}
      <a href="https://www.flaticon.com/authors/freepik" rel="noreferrer" target="_blank">
        Freepik
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com" rel="noreferrer" target="_blank">
        www.flaticon.com
      </a>
    </span>
  </div>
);

const SocialMedia = () => (
  <div className="flex flex-row mb-1">
    <a
      href="https://twitter.com/TerreTropicale"
      rel="noreferrer"
      target="_blank"
      className="mr-3 text-current hover:text-lime-600"
    >
      <TwitterIcon />
    </a>
    <a
      href="https://www.facebook.com/terretropicale"
      rel="noreferrer"
      target="_blank"
      className="mr-3 text-current hover:text-lime-600"
    >
      <FacebookIcon />
    </a>
    <a
      href="https://www.instagram.com/terretropicale"
      rel="noreferrer"
      target="_blank"
      className="text-current hover:text-lime-600"
    >
      <InstagramIcon />
    </a>
  </div>
);

export default Footer;
