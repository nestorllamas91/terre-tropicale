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
    <div className="flex flex-col items-center mb-8 px-4">
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
    <img src="/assets/logo/symbol.svg" className="mb-1 h-12" />
    <SocialMedia />
    <span className="text-sm">&copy; {new Date().getFullYear()} Terre Tropicale</span>
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
