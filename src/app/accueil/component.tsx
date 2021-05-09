import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '@/app/shared/layout/component';
import { BREAKPOINT_1, BREAKPOINT_2 } from '@/data/constants.json';

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
  const router = useRouter();

  return (
    <header className="relative flex mb-8">
      <img src="/assets/images/headers/header-1.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
        <h1 className="mb-1">UN FRUIT, UNE HISTOIRE...</h1>
        <p className="mb-2 page-subtitle">Découvrez des gouts authentiques venus des mythiques cordillères des Andes</p>
        <button onClick={() => router.push('/contact')} className="button">
          Contactez-nous
        </button>
      </div>
    </header>
  );
};

const ServicesSection = () => (
  <section className="mb-8">
    <h2 className="mb-4 text-center">NOTRE OFFRE DE SERVICES</h2>
    <div className="flex flex-row">
      <div className="relative flex mr-1">
        <img src="/assets/images/misc/services-1.jpg" className="object-cover w-full mh:h-56 th:h-auto" />
        <div className="absolute flex flex-col items-start w-full h-full p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
          <h3 className="mb-1">POUR LES PROS</h3>
          <p className="mb-3 leading-4 text-white">Innovez et fidélisez votre clientèle</p>
          <button className="button mt-auto">Détails</button>
        </div>
      </div>
      <div className="relative flex">
        <img src="/assets/images/misc/services-2.jpg" className="object-cover w-full mh:h-56 th:h-auto" />
        <div className="absolute flex flex-col items-start w-full h-full p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
          <h3 className="mb-1">POUR VOS ÉVÉNEMENTS</h3>
          <p className="mb-3 leading-4 text-white">Surprenez vos convives</p>
          <button className="button mt-auto">Détails</button>
        </div>
      </div>
    </div>
  </section>
);

const ValeursSection = (): JSX.Element => (
  <section className="px-4 mb-8 tv:px-10 mh:px-4">
    <h2 className="mb-4 text-center">NOS VALEURS</h2>
    <div className="flex flex-col mh:flex-row mh:text-center th:flex-row th:text-center">
      <div className="flex flex-row items-center flex-1 mb-4 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
        <div className="flex-none w-24 h-24 p-1 mr-4 border-2 border-red-600 rounded-full mh:mb-3 mh:mr-0 th:w-32 th:h-32 th:mb-3 th:mr-0">
          <img src="/assets/images/misc/valeurs-1.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">UNE PULPE DE FRUIT AUTHENTIQUE</h3>
          <p>
            Notre pulpe est issue des fruits rigoureusement sélectionnés, récoltés à maturité optimale, traités sur
            place.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center flex-1 mb-4 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
        <div className="flex-none w-24 h-24 p-1 mr-4 border-2 border-red-600 rounded-full mh:mb-3 mh:mr-0 th:w-32 th:h-32 th:mb-3 th:mr-0">
          <img src="/assets/images/misc/valeurs-2.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">DES SAVEURS TROPICALES UNIQUES</h3>
          <p>Nous proposons une multitude de goûts originaux qui attendent d&rsquo;être découverts.</p>
        </div>
      </div>
      <div className="flex flex-row items-center flex-1 mh:flex-col th:flex-col">
        <div className="flex-none w-24 h-24 p-1 mr-4 border-2 border-red-600 rounded-full mh:mb-3 mh:mr-0 th:w-32 th:h-32 th:mb-3 th:mr-0">
          <img src="/assets/images/misc/valeurs-3.jpg" className="rounded-full" />
        </div>
        <div>
          <h3 className="mb-1 text-lime-500">NOTRE DÉMARCHE ÉTHIQUE ET SOCIALE</h3>
          <p>
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
      <img src="/assets/images/misc/avantages.jpg" className="object-cover w-full h-72" />
      <div className="absolute flex flex-col justify-center w-full h-full p-4 text-white bg-black bg-opacity-40 mh:flex-row mh:text-center th:flex-row th:text-center tv:p-10 mh:px-10 mh:pt-20 mh:pb-10 th:p-20">
        <div className="flex flex-row items-center flex-1 mb-3 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
            1
          </span>
          <p className="text-white">Des fruits récoltés à maturité optimale</p>
        </div>
        <div className="flex flex-row items-center flex-1 mb-3 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
            2
          </span>
          <p className="text-white">Des goûts authentiques avec de grandes qualités nutritionnelles</p>
        </div>
        <div className="flex flex-row items-center flex-1 mb-3 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
            3
          </span>
          <p className="text-white">Préparation simple et rapide</p>
        </div>
        <div className="flex flex-row items-center flex-1 mh:flex-col mh:mb-0 th:flex-col th:mr-3 th:mb-0">
          <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
            4
          </span>
          <p className="text-white">Un grain de temps: pas de lavage ni d&rsquo;épluchage des fruits</p>
        </div>
      </div>
    </div>
  </section>
);

const FruitsSection = () => {
  const [{ viewportWidth, viewportHeight }, setviewportDimensions] = useState<ViewportDimensions>({
    viewportWidth: 0,
    viewportHeight: 0
  });
  let layout = '';
  const fruitsImagesPath = '/assets/images/fruits/collage';

  useEffect(() => {
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  const updateViewportDimensions = () => {
    setviewportDimensions({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
  };

  if (viewportWidth < BREAKPOINT_1) {
    layout = 'mv';
  } else if (viewportWidth < BREAKPOINT_2) {
    layout = viewportWidth / viewportHeight > 1 ? 'mh' : 'tv';
  } else {
    layout = 'th';
  }

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-center">ORIGINALEMENT RAFRAÎCHISSANTE</h2>
      {layout === 'mv' ? (
        <div className="grid grid-cols-2">
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/goyave.jpg`} title="Goyave" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Goyave
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/mure-andine.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Mûre Andine
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/maracuja.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Maracuja
            </span>
          </div>
          <div className="relative flex row-span-2">
            <img src={`${fruitsImagesPath}/mangue.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Mangue
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/papaye.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Papaye
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/lulo.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Lulo
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/corossol.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Corossol
            </span>
          </div>
          <div className="relative flex col-span-2">
            <img src={`${fruitsImagesPath}/tamarillo.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Tamarillo
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/ananas.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Ananas
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/mandarine.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Mandarine
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4">
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/goyave.jpg`} title="Goyave" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Goyave
            </span>
          </div>
          <div className="relative flex row-span-2">
            <img src={`${fruitsImagesPath}/mangue.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Mangue
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/mure-andine.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Mûre Andine
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/maracuja.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Maracuja
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/papaye.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Papaye
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/lulo.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Lulo
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/corossol.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Corossol
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/ananas.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Ananas
            </span>
          </div>
          <div className="relative flex">
            <img src={`${fruitsImagesPath}/mandarine.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Mandarine
            </span>
          </div>
          <div className="relative flex col-span-2">
            <img src={`${fruitsImagesPath}/tamarillo.jpg`} />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              Tamarillo
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

export { ValeursSection };
export default AccueilPage;
