import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Head from 'next/head';
import React, { Fragment, useState } from 'react';

import Layout from '@/app/shared/layout/component';

const useStyles = makeStyles({
  cardContent: {
    padding: '8px'
  },
  button: {
    backgroundColor: '#84cc16',
    '&:hover': {
      backgroundColor: '#65a30d'
    }
  },
  buttonText: {
    fontFamily: 'Montserrat SemiBold',
    fontWeight: 600,
    fontSize: '10px',
    color: 'white'
  }
});
const NosSmoothies = (): JSX.Element => {
  const classes = useStyles();
  const [{ isDialogOpen, smoothie }, setDialog] = useState({ isDialogOpen: false, smoothie: null });
  const smoothiesDetails = {
    Lulo: {
      shortDescription: 'Originalement rafraîchissante.',
      longDescription: 'Description.'
    },
    Maracuja: {
      shortDescription: "Authentique and pleine de pep's",
      longDescription: 'Description.'
    },
    Mangue: {
      shortDescription: 'Goût doux et apaisant.',
      longDescription: 'Description.'
    },
    Corossol: {
      shortDescription: 'Onctueux et plein de beinfaits.',
      longDescription: 'Description.'
    },
    'Mure Andine': {
      shortDescription: 'Intense et délicate.',
      longDescription: 'Description.'
    },
    Ananas: {
      shortDescription: '"Nana" parfum de parfums.',
      longDescription: 'Description.'
    },
    Mandarine: {
      shortDescription: 'Douce et pétillante.',
      longDescription: 'Description.'
    },
    Goyave: {
      shortDescription: 'Tonique, énergisant naturel.',
      longDescription: 'Description.'
    },
    Papaye: {
      shortDescription: 'Zen et équilibré.',
      longDescription: 'Description.'
    },
    Tamarillo: {
      shortDescription: 'Aromatique et acidulé.',
      longDescription: 'Description.'
    }
  };

  return (
    <div>
      <Head>
        <title>Nos smoothies | Terre Tropicale</title>
      </Head>
      <Layout>
        <header className="relative flex">
          <img src="/assets/images/nos-smoothies/header.jpg" alt="Nos smoothies" />
          <div className="absolute flex flex-col justify-center px-4 w-full h-full text-white bg-black bg-opacity-40">
            <h1 className="mb-2">NOS SMOOTHIES</h1>
            <span>Découvrez les saveurs du paradis</span>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-2 py-4">
          {Object.entries(smoothiesDetails).map(([smoothie, { shortDescription }]) => (
            <Fragment key={smoothie}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={`/assets/images/nos-smoothies/${smoothie.toLowerCase().replace(/ /g, '-')}.jpg`}
                    title={smoothie}
                    alt={smoothie}
                  />
                  <CardContent classes={{ root: classes.cardContent }}>
                    <h2>{smoothie}</h2>
                    <span className="text-xs">{shortDescription}</span>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => setDialog({ isDialogOpen: true, smoothie })}
                    classes={{ root: classes.button, label: classes.buttonText }}
                  >
                    DÉTAILS
                  </Button>
                </CardActions>
              </Card>
            </Fragment>
          ))}
          {isDialogOpen && (
            <Dialog open={isDialogOpen} onClose={() => setDialog({ isDialogOpen: false, smoothie: null })}>
              <DialogTitle>
                {smoothie}
                <IconButton onClick={() => setDialog({ isDialogOpen: false, smoothie: null })}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers>
                <img src={`/assets/images/nos-smoothies/${smoothie.toLowerCase().replace(/ /g, '-')}-fruit.jpg`} />
                <p>{smoothiesDetails[smoothie].longDescription}</p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default NosSmoothies;
