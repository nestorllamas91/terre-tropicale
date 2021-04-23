import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Head from 'next/head';
import Router from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Layout from '@/app/layout/component';

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
  },
  contactIcon: {
    marginRight: '8px',
    fontSize: '20px'
  },
  formFieldRoot: {
    '&:not(:last-child)': {
      marginBottom: '8px'
    }
  }
});

const ContactPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact | Terre Tropicale</title>
      </Head>
      <Layout>
        <Header />
        <div className="px-4">
          <IntroSection />
          <div className="mb-8">
            <ContactDetailsSection />
          </div>
          <ContactFormSection />
        </div>
      </Layout>
    </>
  );
};

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/header-3.jpg" />
    <div className="absolute flex flex-col items-start justify-center px-4 py-3 w-full h-full text-white bg-black bg-opacity-40">
      <h1 className="mb-2 text-2xl">CONTACT</h1>
      <p className="mb-1">Restons en contact</p>
      <p>Inscrivez-vous pour une degustation gratuite</p>
    </div>
  </header>
);

const IntroSection = () => (
  <section className="mb-8">
    <p className="text-sm">
      Vous êtes intéressé par nos produits et/ou services et vous souhaitez être contacté? N&apos;hesitez pas à nous
      écrire. Nous vous contacterons dans les plus bref délais.
    </p>
  </section>
);

const ContactDetailsSection = (): JSX.Element => {
  const classes = useStyles();

  return (
    <section className="text-xs">
      <div className="flex flex-row items-center mb-2">
        <div className="flex flex-row items-center mr-3 font-bold whitespace-nowrap">
          <ScheduleIcon classes={{ root: classes.contactIcon }} />
          HORAIRE
        </div>
        <p>Lundi-Vendredi, 09:00-18:00</p>
      </div>
      <div className="flex flex-row items-center mb-2">
        <div className="flex flex-row items-center mr-3 font-bold whitespace-nowrap">
          <BusinessIcon classes={{ root: classes.contactIcon }} />
          ADRESSE POSTALE
        </div>
        <address>9 Rue des Pruniers, 31150 Gratentour</address>
      </div>
      <div className="flex flex-row items-center mb-2">
        <div className="flex flex-row items-center mr-3 font-bold whitespace-nowrap">
          <PhoneIcon classes={{ root: classes.contactIcon }} />
          TÉLÉPHONE
        </div>
        <address>06 24 87 53 78</address>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3 font-bold whitespace-nowrap">
          <EmailIcon classes={{ root: classes.contactIcon }} />
          ADRESSE EMAIL
        </div>
        <address>
          <a href="mailto:contact@terretropicale.com" rel="noreferrer" target="_blank">
            contact@terretropicale.com
          </a>
        </address>
      </div>
    </section>
  );
};

type Sender = {
  name: string;
  email: string;
  phone?: string;
  entity: string;
  message: string;
};

const ContactFormSection = () => {
  const { formFieldRoot, buttonLabel, buttonRoot } = useStyles();
  const [sender, setSender] = useState<Sender>({
    name: '',
    email: '',
    phone: '',
    entity: '',
    message: ''
  });
  const { name, email, phone, entity, message } = sender;
  const MySwal = withReactContent(Swal);

  const handleForm = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    MySwal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are going to send this message to the administrator.',
      width: '550px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(async result => {
      if (result.value) {
        try {
          const url = '/api/contact';
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sender)
          });
          console.log(response);
          if (response.status === 200) {
            MySwal.fire({
              icon: 'success',
              title: 'Message sent!',
              text: 'Your message has been sent to the administrator.',
              width: '550px',
              onClose: () => {
                Router.push('/');
              }
            });
          }
          if (response.status === 500) {
            MySwal.fire({
              icon: 'error',
              title: 'Message not sent!',
              text: 'Your message could not be sent to the administrator.',
              width: '550px'
            });
          }
        } catch {
          MySwal.fire({
            icon: 'error',
            title: 'Message not sent!',
            text: 'Your message could not be sent to the administrator.',
            width: '550px'
          });
        }
      }
    });
  };

  return (
    <section className="mb-8">
      <form className="flex flex-col">
        <TextField
          label="Nom"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSender({ ...sender, name: event.target.value })}
          variant="outlined"
          fullWidth
          required
          classes={{ root: formFieldRoot }}
        />
        <TextField
          label="Adresse email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSender({ ...sender, email: event.target.value })}
          variant="outlined"
          fullWidth
          required
          classes={{ root: formFieldRoot }}
        />
        <TextField
          label="Téléphone"
          value={phone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSender({ ...sender, phone: event.target.value })}
          variant="outlined"
          fullWidth
          classes={{ root: formFieldRoot }}
        />
        <FormControl variant="outlined" required classes={{ root: formFieldRoot }}>
          <InputLabel>Vous êtes</InputLabel>
          <Select
            label="Vous êtes"
            value={entity}
            onChange={(event: ChangeEvent<{ value: unknown }>) =>
              setSender({ ...sender, entity: event.target.value as string })
            }
          >
            <MenuItem value="Particulier">Particulier</MenuItem>
            <MenuItem value="Professionnel">Professionnel</MenuItem>
            <MenuItem value="Enterprise">Enterprise</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Message"
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSender({ ...sender, message: event.target.value })}
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          required
          classes={{ root: formFieldRoot }}
        />
        <Button variant="contained" onClick={handleForm} classes={{ root: buttonRoot, label: buttonLabel }}>
          ENVOYER
        </Button>
      </form>
    </section>
  );
};

export default ContactPage;
export { ContactDetailsSection };
