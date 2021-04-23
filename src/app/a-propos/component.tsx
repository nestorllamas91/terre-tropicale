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
        <Header />
        <QuiSommesNousSection />
        <ValeursSection />
      </Layout>
    </>
  );
};

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/header-3.jpg" />
    <div className="absolute flex flex-col items-start justify-center px-4 py-3 w-full h-full text-white bg-black bg-opacity-40">
      <h1 className="mb-2 text-2xl">À PROPOS</h1>
      <p className="mb-1">Jus de fruits, smoothies et cocktails tropicaux</p>
      <p>Naturel et responsable</p>
    </div>
  </header>
);

const QuiSommesNousSection = () => (
  <section className="mb-8">
    <h1 className="mb-4 text-center">QUI SOMMES-NOUS?</h1>
    <div className="mb-4 paragraphs-margin px-4">
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
    <img src="/assets/images/qui-sommes-nous.jpg" />
  </section>
);

export default AProposPage;
