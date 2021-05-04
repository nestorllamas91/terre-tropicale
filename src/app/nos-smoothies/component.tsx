import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import { Fragment, useRef, useState } from 'react';

import Layout from '@/app/shared/layout/component';
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
    <img src="/assets/images/headers/header-2.jpg" />
    <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
      <h1 className="mb-2">NOS SMOOTHIES</h1>
      <p className="page-subtitle">Les saveurs du paradis</p>
      <p className="page-subtitle">Fruits rigoureusement sélectionnés</p>
    </div>
  </header>
);

const SmoothiesSection = () => {
  const [smoothie, setSmoothie] = useState<Smoothie | null>(null);

  return (
    <section className="grid grid-cols-2 gap-4 px-4 mb-8 sm:grid-cols-3">
      {smoothies.map((smoothie, index) => {
        const { name, slug, smoothieDescription } = smoothie;
        return (
          <figure
            key={index}
            onClick={() => setSmoothie(smoothie)}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <div className="flex-shrink-0">
              <img className="object-cover w-full h-48" src={`/assets/images/smoothies/${slug}.jpg`} />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <div className="block mt-2">
                  <h3 className="font-semibold text-gray-900 font-heading">{name}</h3>
                  <p className="mt-3 text-gray-500">{smoothieDescription}</p>
                </div>
              </div>
            </div>
          </figure>
        );
      })}
      {smoothie && <DialogFruit smoothie={smoothie} closeFruit={() => setSmoothie(null)} />}
    </section>
  );
};

const DialogFruit = ({ smoothie, closeFruit }: DialogFruitProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  return (
    <Transition.Root show={smoothie ? true : false} as={Fragment}>
      <Dialog as="div" static initialFocus={dialogRef} open={smoothie ? true : false} onClose={closeFruit}>
        <div
          ref={dialogRef}
          className="fixed inset-0 z-10 flex items-center justify-center min-h-screen px-10 overflow-y-auto text-center sm:px-0"
        >
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
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden h-screen sm:inline-block sm:align-middle">&#8203;</span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <Dialog.Title as="h3" className="mb-4 font-bold text-center">
                {smoothie?.name}: le fruit
              </Dialog.Title>
              <img src={`/assets/images/fruits/${smoothie?.slug}.jpg`} className="mb-4" />
              <div className="mt-3 text-center sm:mt-5">
                <div className="mt-2">
                  <p className="text-sm text-left">{smoothie?.fruitDescription}</p>
                </div>
              </div>
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

export default NosSmoothiesPage;
