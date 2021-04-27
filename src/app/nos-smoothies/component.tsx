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
      <Header />
      <SmoothiesSection />
    </Layout>
  </>
);

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/headers/header-2.jpg" />
    <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
      <h1 className="mb-2">NOS SMOOTHIES</h1>
      <p className="mb-1 text-white">Les saveurs du paradis</p>
      <p className="text-white">Fruits rigoureusement sélectionnés</p>
    </div>
  </header>
);

type Smoothie = typeof smoothies[number];

const SmoothiesSection = () => {
  const { cardContentRoot, buttonRoot, buttonLabel } = useStyles();
  const [smoothie, setSmoothie] = useState<Smoothie | null>(null);

  return (
    <section className="grid grid-cols-2 gap-4 px-4 mb-8">
      {smoothies.map((smoothie, index) => {
        const { name, slug, smoothieDescription } = smoothie;
        return (
          <figure key={index}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={`/assets/images/smoothies/${slug}.jpg`} />
                <CardContent classes={{ root: cardContentRoot }}>
                  <p className="font-bold">{name}</p>
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
          </figure>
        );
      })}
      {smoothie && <DialogFruit smoothie={smoothie} onClose={() => setSmoothie(null)} />}
    </section>
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
        <p className="font-bold">{name}: le fruit</p>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <img src={`/assets/images/fruits/${slug}.jpg`} className="mb-3" />
        <p className="text-sm">{fruitDescription}</p>
      </DialogContent>
    </Dialog>
  );
};

export default NosSmoothiesPage;
