import Head from 'next/head';

import { ValeursSection } from '@/app/accueil/component';
import Layout from '@/app/shared/layout/component';

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
    <img src="/assets/images/headers/header-3.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
    <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
      <h1 className="mb-1">À PROPOS</h1>
      <p className="page-subtitle">Jus de fruits, smoothies et cocktails tropicaux</p>
      <p className="page-subtitle">Naturel et responsable</p>
    </div>
  </header>
);

const QuiSommesNousSection = () => (
  <section className="mb-8">
    <h2 className="mb-4 text-center">QUI SOMMES-NOUS?</h2>
    <div className="px-4 mb-4 paragraph-margin">
      <p>
        Terre Tropicale est née en 2011 de la volonté de partager la culture et les saveurs des produits tropicaux en
        provenance d&rsquo;Amérique Latine. Nous nous spécialisons dans la distribution de pulpe des fruits, un produit
        aux saveurs authentiques et originales, fair de vrais fruits.
      </p>
      <p>
        Nous apportons aux professionels de la restauration une offre de proximité et de diversité en terms de goûts et
        de qualité. Nous leur offrons, une large gamme de saveurs tropicales uniques à découvrir, disponibles toute
        l&rsquo;année.
      </p>
      <p>Laissez-vous tenter, dégustez et savourez!</p>
    </div>
  </section>
);

export default AProposPage;
