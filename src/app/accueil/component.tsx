import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '@/app/shared/layout/component';

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

const AccueilPage = (): JSX.Element => (
  <>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <Layout>
      <HeaderSection />
      <ServicesSection />
      <ValeursSection />
      <AvantagesSection />
      <FruitsSection />
    </Layout>
  </>
);

export default AccueilPage;

const HeaderSection = () => {
  const { buttonLabel, buttonRoot } = useStyles();

  return (
    <header className="relative flex mb-6">
      <img src="/assets/images/accueil/header.jpg" />
      <div className="absolute flex flex-col items-start justify-center px-4 w-full h-full text-white bg-black bg-opacity-40">
        <h1 className="mb-2">UN FRUIT, UNE HISTOIRE...</h1>
        <p className="mb-4">Découvrez des gouts authentiques venus des mythiques cordillères des Andes</p>
        <Link href="/contact">
          <Button variant="contained" classes={{ root: buttonRoot, label: buttonLabel }}>
            CONTACTEZ-NOUS
          </Button>
        </Link>
      </div>
    </header>
  );
};

const ServicesSection = () => {
  const { buttonLabel, buttonRoot } = useStyles();

  return (
    <div className="mb-6">
      <h1 className="mb-2 text-center">NOTRE OFFRE DE SERVICES</h1>
      <div className="flex flex-row">
        <div className="relative flex mr-1">
          <img src="/assets/images/accueil/services-1.jpg" />
          <div className="absolute flex flex-col items-start justify-center px-2 w-full h-full text-white bg-black bg-opacity-40">
            <h2 className="mb-1">POUR LES PROS</h2>
            <p className="mb-2">Innovez et fidélisez votre clientèle</p>
            <Button variant="contained" classes={{ root: buttonRoot, label: buttonLabel }}>
              DÉTAILS
            </Button>
          </div>
        </div>
        <div className="relative flex">
          <img src="/assets/images/accueil/services-2.jpg" />
          <div className="absolute flex flex-col items-start justify-center px-2 w-full h-full text-white bg-black bg-opacity-40">
            <h2 className="mb-1">POUR VOS ÉVÉNEMENTS</h2>
            <p className="mb-2">Surprenez vos convives</p>
            <Button variant="contained" classes={{ root: buttonRoot, label: buttonLabel }}>
              DÉTAILS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValeursSection = (): JSX.Element => (
  <div className="mb-6">
    <h1 className="mb-2 text-center">NOS VALEURS</h1>
    <div className="flex flex-col px-2">
      <div className="flex flex-row items-center mb-1.5">
        <div className="flex-none border-2 border-red-600 rounded-full mr-2 p-1 w-24 h-24">
          <img src="/assets/images/accueil/valeurs-1.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">UNE PULPE DE FRUIT AUTHENTIQUE</h3>
          <p className="text-xs">
            Notre pulpe est issue des fruits rigoureusement sélectionnés, récoltés à maturité optimale, traités sur
            place.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center mb-1.5">
        <div className="flex-none border-2 border-red-600 rounded-full mr-2 p-1 w-24 h-24">
          <img src="/assets/images/accueil/valeurs-2.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">DES SAVEURS TROPICALES UNIQUES</h3>
          <p className="text-xs">
            Nous proposons une multitude de goûts originaux qui attendent d&apos;être découverts.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex-none border-2 border-red-600 rounded-full mr-2 p-1 w-24 h-24">
          <img src="/assets/images/accueil/valeurs-3.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">NOTRE DÉMARCHE ÉTHIQUE ET SOCIALE</h3>
          <p className="text-xs">
            Nous promouvons les cultures et l&apos;emploi local. Nos pulpes permettent à 2500 familles de producteurs
            colombiens.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export { ValeursSection };

const AvantagesSection = () => (
  <div className="mb-6">
    <h1 className="mb-2 text-center">LES AVANTAGES PRODUIT</h1>
    <div className="relative flex">
      <img src="/assets/images/accueil/avantages.jpg" />
      <div className="absolute flex flex-col justify-center px-4 w-full h-full text-white bg-black bg-opacity-40">
        <div className="flex flex-row items-center mb-2">
          <div className="flex flex-row justify-center items-center flex-none mr-4 border-2 border-white rounded-full w-12 h-12">
            1
          </div>
          <p>Des fruits récoltés à maturité optimale</p>
        </div>
        <div className="flex flex-row items-center mb-2">
          <div className="flex flex-row justify-center items-center flex-none mr-4 border-2 border-white rounded-full w-12 h-12">
            2
          </div>
          <p>Des goûts authentiques avec de grandes qualités nutritionnelles</p>
        </div>
        <div className="flex flex-row items-center mb-2">
          <div className="flex flex-row justify-center items-center flex-none mr-4 border-2 border-white rounded-full w-12 h-12">
            3
          </div>
          <p>Préparation simple et rapide</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row justify-center items-center flex-none mr-4 border-2 border-white rounded-full w-12 h-12">
            4
          </div>
          <p>Un grain de temps: pas de lavage ni d&apos;épluchage des fruits</p>
        </div>
      </div>
    </div>
  </div>
);

const FruitsSection = () => {
  const fruitsImagesPath = '/assets/images/accueil';

  return (
    <div className="mb-6">
      <h1 className="mb-2 text-center">ORIGINALEMENT RAFRAÎCHISSANTE</h1>
      <div className="grid grid-cols-2">
        <img src={`${fruitsImagesPath}/goyave.jpg`} title="Goyave" />
        <img src={`${fruitsImagesPath}/mure-andine.jpg`} title="Mûre Andine" />
        <img src={`${fruitsImagesPath}/maracuja.jpg`} title="Maracuja" />
        <img src={`${fruitsImagesPath}/mangue.jpg`} title="Mangue" className="row-span-2" />
        <img src={`${fruitsImagesPath}/papaye.jpg`} title="Papaye" />
        <img src={`${fruitsImagesPath}/lulo.jpg`} title="Lulo" />
        <img src={`${fruitsImagesPath}/corossol.jpg`} title="Corossol" />
        <img src={`${fruitsImagesPath}/tamarillo.jpg`} title="Tamarillo" className="col-span-2" />
        <img src={`${fruitsImagesPath}/ananas.jpg`} title="Ananas" />
        <img src={`${fruitsImagesPath}/mandarine.jpg`} title="Mandarine" />
      </div>
    </div>
  );
};
