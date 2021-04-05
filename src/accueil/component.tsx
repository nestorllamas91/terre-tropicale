import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../layout/component';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#84cc16',
    '&:hover': {
      backgroundColor: '#65a30d',
    },
  },
  buttonText: {
    fontSize: '10px',
    fontWeight: 600,
    color: 'white',
  },
  tooltip: {
    bottom: '50px',
    maxWidth: '100%',
  },
});

const Accueil = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Terre Tropicale</title>
      </Head>
      <Layout>
        <header className="relative flex">
          <img src="/assets/images/accueil/header.jpg" alt="Un fruit, une histoire..." />
          <div className="absolute flex flex-col justify-center px-4 w-full h-full bg-black bg-opacity-40">
            <div className="flex flex-col items-start text-white">
              <h1 className="mb-2">UN FRUIT, UNE HISTOIRE...</h1>
              <span className="mb-4">Découvrez des gouts authentiques venus des mythiques cordillères des Andes</span>
              <Link href="/contact">
                <Button variant="contained" classes={{ root: classes.button, label: classes.buttonText }}>
                  CONTACTEZ-NOUS
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <h1 className="mt-6 mb-2 text-center">NOTRE OFFRE DE SERVICES</h1>
        <div className="flex flex-row">
          <div className="relative flex mr-1">
            <img src="/assets/images/accueil/services-1.jpg" alt="Pour les pros" />
            <div className="absolute flex flex-col justify-center px-2 w-full h-full bg-black bg-opacity-40">
              <div className="flex flex-col items-start text-white">
                <h2 className="mb-1">POUR LES PROS</h2>
                <span className="mb-2">Innovez et fidélisez votre clientèle</span>
                <Button variant="contained" classes={{ root: classes.button, label: classes.buttonText }}>
                  DÉTAILS
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <img src="/assets/images/accueil/services-2.jpg" alt="Pour vos événements" />
            <div className="absolute flex flex-col justify-center px-2 w-full h-full bg-black bg-opacity-40">
              <div className="flex flex-col items-start text-white">
                <h2 className="mb-1">POUR VOS ÉVÉNEMENTS</h2>
                <span className="mb-2">Surprenez vos convives</span>
                <Button variant="contained" classes={{ root: classes.button, label: classes.buttonText }}>
                  DÉTAILS
                </Button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-6 mb-2 text-center">NOS VALEURS</h1>
        <div className="flex flex-col px-2">
          <div className="flex flex-row items-center mb-1.5">
            <img
              src="/assets/images/accueil/valeurs-1.jpg"
              alt="Une pulpe de fruit authentique"
              className="border-2 border-red-600 rounded-full mr-2 p-1 w-24 h-24"
            />
            <div>
              <h2 className="mb-1 text-lime-500">UNE PULPE DE FRUIT AUTHENTIQUE</h2>
              <p className="text-xs">
                Notre pulpe est issue des fruits rigoureusement sélectionnés, récoltés à maturité optimale, traités sur
                place.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mb-1.5">
            <img
              src="/assets/images/accueil/valeurs-2.jpg"
              alt="Des saveurs tropicales uniques"
              className="border-2 border-red-600 rounded-full mr-2 p-1 w-24 h-24"
            />
            <div>
              <h2 className="mb-1 text-lime-500">DES SAVEURS TROPICALES UNIQUES</h2>
              <p className="text-xs">
                Nous proposons une multitude de goûts originaux qui attendent d&apos;être découverts.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="/assets/images/accueil/valeurs-3.jpg"
              alt="Notre démarche éthique et sociale"
              className="border-2 border-red-600 rounded-full mr-2 p-1 w-24 h-24"
            />
            <div>
              <h2 className="mb-1 text-lime-500">NOTRE DÉMARCHE ÉTHIQUE ET SOCIALE</h2>
              <p className="text-xs">
                Nous promouvons les cultures et l&apos;emploi local. Nos pulpes permettent à 2500 familles de
                producteurs colombiens.
              </p>
            </div>
          </div>
        </div>
        <h1 className="mt-6 mb-2 text-center">LES AVANTAGES PRODUIT</h1>
        <div className="relative flex">
          <img src="/assets/images/accueil/avantages.jpg" alt="Les avantages produit" />
          <div className="absolute flex flex-col justify-center px-4 w-full h-full bg-black bg-opacity-40">
            <div className="flex flex-row items-center mb-2 text-white">
              <div className="flex flex-row justify-center items-center mr-4 border-2 border-white rounded-full w-12 h-12">
                <span>1</span>
              </div>
              <span>Des fruits récoltés à maturité optimale</span>
            </div>
            <div className="flex flex-row items-center mb-2 text-white">
              <div className="flex-none flex flex-row justify-center items-center mr-4 border-2 border-white rounded-full w-12 h-12">
                <span>2</span>
              </div>
              <span>Des goûts authentiques avec de grandes qualités nutritionnelles</span>
            </div>
            <div className="flex flex-row items-center mb-2 text-white">
              <div className="flex flex-row justify-center items-center mr-4 border-2 border-white rounded-full w-12 h-12">
                <span>3</span>
              </div>
              <span>Préparation simple et rapide</span>
            </div>
            <div className="flex flex-row items-center text-white">
              <div className="flex-none flex flex-row justify-center items-center mr-4 border-2 border-white rounded-full w-12 h-12">
                <span>4</span>
              </div>
              <span>Un grain de temps: pas de lavage ni d&apos;épluchage des fruits</span>
            </div>
          </div>
        </div>
        <h1 className="mt-6 mb-2 text-center">ORIGINALEMENT RAFRAÎCHISSANTE</h1>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src="/assets/images/accueil/goyave.jpg" alt="Goyave" className="w-1/2" />
            <img src="/assets/images/accueil/mure-andine.jpg" alt="Mure Andine" className="w-1/2" />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
              <img src="/assets/images/accueil/maracuja.jpg" alt="Maracuja" />
              <img src="/assets/images/accueil/papaye.jpg" alt="Papaye" />
            </div>
            <img src="/assets/images/accueil/mangue.jpg" alt="Mangue" className="w-1/2" />
          </div>
          <div className="flex flex-row">
            <img src="/assets/images/accueil/lulo.jpg" alt="Lulo" className="w-1/2" />
            <img src="/assets/images/accueil/corossol.jpg" alt="Corossol" className="w-1/2" />
          </div>
          <img src="/assets/images/accueil/tamarillo.jpg" alt="Tamarillo" />
          <div className="flex flex-row">
            <img src="/assets/images/accueil/ananas.jpg" alt="Ananas" className="w-1/2" />
            <img src="/assets/images/accueil/mandarine.jpg" alt="Mandarine" className="w-1/2" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Accueil;
