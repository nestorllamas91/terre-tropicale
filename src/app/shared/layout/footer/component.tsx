import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  button: {
    marginBottom: '20px',
    backgroundColor: '#84cc16',
    '&:hover': {
      backgroundColor: '#65a30d'
    }
  },
  buttonText: {
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'none',
    color: 'white'
  },
  contactIcon: {
    marginRight: '12px',
    fontSize: '20px'
  },
  socialMediaIcon: {
    fontSize: '36px',
    color: '#65a30d'
  }
});

const Footer = (): JSX.Element => {
  const classes = useStyles();
  const activePage = useRouter().asPath;

  return (
    <footer>
      {activePage !== '/contact' && (
        <div className="flex flex-col items-center justify-center py-4 bg-coolGray-200">
          <h1>VOUS ÊTES INTÉRESSÉ</h1>
          <span className="mb-2.5">Inscrivez-vous pour une degustation gratuite ou.</span>
          <Link href="/contact">
            <Button variant="contained" classes={{ root: classes.button, label: classes.buttonText }}>
              Demandez votre devis maintenant
            </Button>
          </Link>
          <div className="flex flex-col mb-3 text-xs">
            <div className="flex flex-row items-center mb-1.5">
              <ScheduleIcon classes={{ root: classes.contactIcon }} />
              <span className="mr-2 font-bold">HORAIRE</span>
              <span>Lundi-Vendredi: 09:00-18:00</span>
            </div>
            <div className="flex flex-row items-center mb-1.5">
              <BusinessIcon classes={{ root: classes.contactIcon }} />
              <span className="mr-2 font-bold">ADRESSE POSTALE</span>
              <div className="flex flex-col items-start">
                <span className="leading-4">782 Route de Verlhaguet</span>
                <span className="leading-4">82290 Montbeton, Montauban</span>
              </div>
            </div>
            <div className="flex flex-row items-center mb-1.5">
              <PhoneIcon classes={{ root: classes.contactIcon }} />
              <span className="mr-2 font-bold">TÉLÉPHONE</span>
              <span>+33 06 24 87 53 78</span>
            </div>
            <div className="flex flex-row items-center">
              <EmailIcon classes={{ root: classes.contactIcon }} />
              <span className="mr-2 font-bold">EMAIL</span>
              <span>contact@terretropicale.com</span>
            </div>
          </div>
          <div className="flex flex-row">
            <a href="https://www.facebook.com/terretropicale" rel="noreferrer" target="_blank" className="mr-3">
              <FacebookIcon classes={{ root: classes.socialMediaIcon }} />
            </a>
            <a href="https://twitter.com/TerreTropicale" rel="noreferrer" target="_blank" className="mr-3">
              <TwitterIcon classes={{ root: classes.socialMediaIcon }} />
            </a>
            <a href="https://www.instagram.com/terretropicale" rel="noreferrer" target="_blank">
              <InstagramIcon classes={{ root: classes.socialMediaIcon }} />
            </a>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-center items-center h-14 bg-coolGray-300">
        <span>&copy; 2021 Terre Tropicale</span>
      </div>
    </footer>
  );
};

export default Footer;
