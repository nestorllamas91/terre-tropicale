import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Head from 'next/head';
import Router from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Layout from '@/app/layout/component';
import { ContactDetails } from '@/app/layout/footer/component';

const useStyles = makeStyles({
  formFieldRoot: {
    '&:not(:last-child)': {
      marginBottom: '8px'
    }
  },
  buttonLabel: {
    fontFamily: 'Montserrat SemiBold',
    fontWeight: 600,
    fontSize: '10px',
    color: 'white'
  },
  buttonRoot: {
    padding: '10px 0',
    backgroundColor: '#84cc16',
    '&:hover': {
      backgroundColor: '#65a30d'
    }
  }
});

const ContactPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Contact | Terre Tropicale</title>
      </Head>
      <Layout>
        <HeaderSection />
        <div className="flex flex-col items-center">
          <Introduction />
          <ContactDetails />
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
};

export default ContactPage;

const HeaderSection = () => (
  <header className="relative flex mb-6">
    <img src="/assets/images/contact/header.jpg" />
    <h1 className="absolute flex flex-col justify-center px-4 w-full h-full text-white bg-black bg-opacity-40">
      RESTONS EN CONTACT
    </h1>
  </header>
);

const Introduction = () => (
  <p className="mb-6 px-4 text-sm">
    Vous êtes intéressé par nos produits et/ou services et vous souhaitez être contacté. N&apos;hesitez pas à nous
    écrire. Nous vous contacterons dans les plus bref délais.
  </p>
);

type Sender = {
  name: string;
  email: string;
  phone?: string;
  entity: string;
  message: string;
};

const ContactForm = () => {
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
    <div className="flex flex-col w-full mt-3 mb-6 px-4">
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
    </div>
  );
};
