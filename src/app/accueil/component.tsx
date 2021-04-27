import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';

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
  }
});

const AccueilPage = (): JSX.Element => (
  <>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <Layout>
      <Header />
      <ServicesSection />
      <ValeursSection />
      <AvantagesSection />
      <FruitsSection />
    </Layout>
  </>
);

const Header = () => {
  const { buttonLabel, buttonRoot } = useStyles();

  return (
    <header className="relative flex mb-8">
      <img src="/assets/images/headers/header-1.jpg" />
      <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
        <h1 className="mb-2">UN FRUIT, UNE HISTOIRE...</h1>
        <p className="mb-3 text-white">Découvrez des gouts authentiques venus des mythiques cordillères des Andes</p>
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
    <section className="mb-8">
      <h2 className="mb-4 text-center">NOTRE OFFRE DE SERVICES</h2>
      <div className="flex flex-row">
        <div className="relative flex mr-1">
          <img src="/assets/images/misc/services-1.jpg" />
          <div className="absolute flex flex-col items-start w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
            <h3 className="mb-1">POUR LES PROS</h3>
            <p className="mb-2 text-sm text-white">Innovez et fidélisez votre clientèle</p>
            <Button variant="contained" classes={{ root: buttonRoot, label: buttonLabel }}>
              DÉTAILS
            </Button>
          </div>
        </div>
        <div className="relative flex">
          <img src="/assets/images/misc/services-2.jpg" />
          <div className="absolute flex flex-col items-start w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
            <h3 className="mb-1">POUR VOS ÉVÉNEMENTS</h3>
            <p className="mb-2 text-sm text-white">Surprenez vos convives</p>
            <Button variant="contained" classes={{ root: buttonRoot, label: buttonLabel }}>
              DÉTAILS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValeursSection = (): JSX.Element => (
  <section className="px-4 mb-8">
    <h2 className="mb-4 text-center">NOS VALEURS</h2>
    <div className="flex flex-col">
      <div className="flex flex-row items-center mb-2.5">
        <div className="flex-none w-24 h-24 p-1 mr-2 border-2 border-red-600 rounded-full">
          <img src="/assets/images/misc/valeurs-1.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">UNE PULPE DE FRUIT AUTHENTIQUE</h3>
          <p className="text-xs">
            Notre pulpe est issue des fruits rigoureusement sélectionnés, récoltés à maturité optimale, traités sur
            place.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center mb-2.5">
        <div className="flex-none w-24 h-24 p-1 mr-2 border-2 border-red-600 rounded-full">
          <img src="/assets/images/misc/valeurs-2.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">DES SAVEURS TROPICALES UNIQUES</h3>
          <p className="text-xs">
            Nous proposons une multitude de goûts originaux qui attendent d&rsquo;être découverts.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex-none w-24 h-24 p-1 mr-2 border-2 border-red-600 rounded-full">
          <img src="/assets/images/misc/valeurs-3.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">NOTRE DÉMARCHE ÉTHIQUE ET SOCIALE</h3>
          <p className="text-xs">
            Nous promouvons les cultures et l&rsquo;emploi local. Nos pulpes permettent à 2500 familles de producteurs
            colombiens.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AvantagesSection = () => (
  <section className="mb-8">
    <h2 className="mb-4 text-center">LES AVANTAGES PRODUIT</h2>
    <div className="relative flex">
      <img src="/assets/images/misc/avantages.jpg" />
      <div className="absolute flex flex-col w-full h-full px-4 py-3 text-sm text-white bg-black bg-opacity-40">
        <div className="flex flex-row items-center mb-4">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-4 text-white border-2 border-white rounded-full">
            1
          </span>
          <p className="text-white">Des fruits récoltés à maturité optimale</p>
        </div>
        <div className="flex flex-row items-center mb-4">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-4 text-white border-2 border-white rounded-full">
            2
          </span>
          <p className="text-white">Des goûts authentiques avec de grandes qualités nutritionnelles</p>
        </div>
        <div className="flex flex-row items-center mb-4">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-4 text-white border-2 border-white rounded-full">
            3
          </span>
          <p className="text-white">Préparation simple et rapide</p>
        </div>
        <div className="flex flex-row items-center">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-4 text-white border-2 border-white rounded-full">
            4
          </span>
          <p className="text-white">Un grain de temps: pas de lavage ni d&rsquo;épluchage des fruits</p>
        </div>
      </div>
    </div>
  </section>
);

const FruitsSection = () => {
  const fruitsImagesPath = '/assets/images/fruits/collage';

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-center">ORIGINALEMENT RAFRAÎCHISSANTE</h2>
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
    </section>
  );
};

export default AccueilPage;
export { ValeursSection };
