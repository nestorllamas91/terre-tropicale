import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import { Fragment, useEffect, useRef, useState } from 'react';

import Layout from '@/app/shared/layout/component';
import { BREAKPOINT_2 } from '@/data/constants.json';
import smoothies from '@/data/smoothies.json';

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
    <img src="/assets/images/headers/header-2.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
    <div className="absolute flex flex-col items-start justify-center w-full h-full px-3 py-4 text-white bg-black bg-opacity-40 tv:px-10 tv:py-24 mh:px-10 mh:py-24 th:px-20">
      <h1 className="mb-2">NOS SMOOTHIES</h1>
      <p className="page-subtitle">Les saveurs du paradis</p>
      <p className="page-subtitle">Fruits rigoureusement sélectionnés</p>
    </div>
  </header>
);

const SmoothiesSection = () => {
  const [smoothie, setSmoothie] = useState<Smoothie | null>(null);

  return (
    <section className="grid grid-cols-2 gap-4 px-4 mb-8 mh:grid-cols-4 tv:grid-cols-3 th:px-0 th:grid-cols-3">
      {smoothies.map((smoothie, index) => {
        const { name, slug, smoothieDescription } = smoothie;
        return (
          <figure
            key={index}
            onClick={() => setSmoothie(smoothie)}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img src={`/assets/images/smoothies/${slug}.jpg`} />
            <div className="flex flex-col justify-between flex-1 p-6 bg-warmGray-50">
              <h3 className="text-lime-600">{name}</h3>
              <p className="mt-3">{smoothieDescription}</p>
            </div>
          </figure>
        );
      })}
      {smoothie && <DialogFruit smoothie={smoothie} closeFruit={() => setSmoothie(null)} />}
    </section>
  );
};

const DialogFruit = ({ smoothie, closeFruit }: DialogFruitProps) => {
  const [{ viewportWidth, viewportHeight }, setviewportDimensions] = useState<ViewportDimensions>({
    viewportWidth: 0,
    viewportHeight: 0
  });
  const refModalFruit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  const updateViewportDimensions = () => {
    setviewportDimensions({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
  };

  if (!(viewportWidth && viewportHeight)) return null;
  return (
    <Transition.Root show={smoothie ? true : false} as={Fragment}>
      <Dialog as="div" static initialFocus={refModalFruit} open={smoothie ? true : false} onClose={closeFruit}>
        <div ref={refModalFruit} className="fixed inset-0 z-20 flex justify-center items-center px-10 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 h-screen transition-opacity bg-gray-700 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 tv:translate-y-0 tv:scale-95"
            enterTo="opacity-100 translate-y-0 tv:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 tv:scale-100"
            leaveTo="opacity-0 translate-y-4 tv:translate-y-0 tv:scale-95"
          >
            <div className="px-4 py-4 overflow-hidden align-bottom transition-all transform bg-white rounded-lg shadow-xl tv:w-full tv:max-w-sm tv:p-6 tv:my-8 tv:align-middle mh:max-w-md mh:max-h-60 mh:p-6 th:w-full th:max-w-sm th:p-6 th:my-8 th:align-middle">
              {viewportWidth < BREAKPOINT_2 && viewportWidth > viewportHeight ? (
                <div className="flex flex-row">
                  <div className="mr-4">
                    <Dialog.Title as="h3" className="mb-4 font-bold">
                      {smoothie?.name}: le fruit
                    </Dialog.Title>
                    <p className="mt-3 text-sm text-left tv:mt-5">{smoothie?.fruitDescription}</p>
                  </div>
                  <img src={`/assets/images/fruits/${smoothie?.slug}.jpg`} className="mh:w-1/2 mh:h-auto" />
                </div>
              ) : (
                <div className="flex flex-col">
                  <Dialog.Title as="h3" className="mb-4 font-bold text-center">
                    {smoothie?.name}: le fruit
                  </Dialog.Title>
                  <img src={`/assets/images/fruits/${smoothie?.slug}.jpg`} className="mh:w-1/2 mh:h-auto" />
                  <p className="mt-3 text-sm text-left tv:mt-5">{smoothie?.fruitDescription}</p>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

type Smoothie = typeof smoothies[number];

type DialogFruitProps = {
  smoothie: Smoothie | null;
  closeFruit: () => void;
};

type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

export default NosSmoothiesPage;
