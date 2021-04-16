import Head from 'next/head';

import { ValeursSection } from '@/app/accueil/component';
import Layout from '@/app/layout/component';

const AProposPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>À propos | Terre Tropicale</title>
      </Head>
      <Layout>
        <HeaderSection />
        <QuiSommesNousSection />
        <ValeursSection />
      </Layout>
    </>
  );
};

export default AProposPage;

const HeaderSection = () => (
  <header className="relative flex mb-6">
    <img src="/assets/images/a-propos/header.jpg" />
    <div className="absolute flex flex-col justify-center px-4 w-full h-full text-white bg-black bg-opacity-40">
      <h1 className="mb-2">À PROPOS</h1>
      <p>Découvrez des gouts authentiques venus des mythiques cordillères des Andes</p>
    </div>
  </header>
);

const QuiSommesNousSection = () => (
  <div className="mb-6">
    <h1 className="mb-2 text-center">QUI SOMMES-NOUS?</h1>
    <div className="px-4">
      <p>
        Terre Tropicale est née en 2011 de la volonté de partager la culture et les saveurs des produits tropicaux en
        provenance d&apos;Amérique Latine. Nous nous spécialisons dans la distribution de pulpe des fruits, un produit
        aux saveurs authentiques et originales, fair de vrais fruits.
      </p>
      <p>
        Nous apportons aux professionels de la restauration une offre de proximité et de diversité en terms de goûts et
        de qualité. Nous leur offrons, une large gamme de saveurs tropicales uniques à découvrir, disponibles toute
        l&apos;année.
      </p>
      <p>Laissez-vous tenter, dégustez et savourez!</p>
    </div>
    <img src="/assets/images/a-propos/qui-sommes-nous.jpg" />
  </div>
);
