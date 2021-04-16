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
import { useState } from 'react';

import Layout from '@/app/layout/component';
import smoothies from '@/data/smoothies.json';

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
  cardContentRoot: {
    padding: '8px'
  },
  dialogTitleRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 12px 0px 24px'
  }
});

const NosSmoothiesPage = (): JSX.Element => (
  <>
    <Head>
      <title>Nos smoothies | Terre Tropicale</title>
    </Head>
    <Layout>
      <HeaderSection />
      <SmoothiesSection />
    </Layout>
  </>
);

export default NosSmoothiesPage;

const HeaderSection = () => (
  <header className="relative flex mb-6">
    <img src="/assets/images/nos-smoothies/header.jpg" />
    <div className="absolute flex flex-col justify-center px-4 w-full h-full text-white bg-black bg-opacity-40">
      <h1 className="mb-2">NOS SMOOTHIES</h1>
      <p>Découvrez les saveurs du paradis</p>
    </div>
  </header>
);

type Smoothie = typeof smoothies[number];

const SmoothiesSection = () => {
  const { cardContentRoot, buttonRoot, buttonLabel } = useStyles();
  const [smoothie, setSmoothie] = useState<Smoothie | null>(null);

  return (
    <div className="grid grid-cols-2 gap-2 mb-6">
      {smoothies.map((smoothie, index) => {
        const { name, slug, smoothieDescription } = smoothie;
        return (
          <Card key={index}>
            <CardActionArea>
              <CardMedia component="img" image={`/assets/images/nos-smoothies/${slug}.jpg`} />
              <CardContent classes={{ root: cardContentRoot }}>
                <h2>{name}</h2>
                <p className="text-xs">{smoothieDescription}</p>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                onClick={() => setSmoothie(smoothie)}
                classes={{ root: buttonRoot, label: buttonLabel }}
              >
                DÉTAILS
              </Button>
            </CardActions>
          </Card>
        );
      })}
      {smoothie && <DialogFruit smoothie={smoothie} onClose={() => setSmoothie(null)} />}
    </div>
  );
};

type DialogFruitProps = {
  smoothie: Smoothie;
  onClose: () => void;
};

const DialogFruit = ({ smoothie: { name, slug, fruitDescription }, onClose }: DialogFruitProps) => {
  const { dialogTitleRoot } = useStyles();

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle disableTypography classes={{ root: dialogTitleRoot }}>
        <h2>{name} - Le fruit</h2>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <img src={`/assets/images/nos-smoothies/${slug}.jpg`} className="mb-2.5" />
        <p>{fruitDescription}</p>
      </DialogContent>
    </Dialog>
  );
};
