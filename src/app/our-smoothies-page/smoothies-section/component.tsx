import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { Fragment, useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { BREAKPOINT_1, BREAKPOINT_2 } from '@/shared/constants';

type Smoothie = {
  filename: string;
  fruitDescription: string;
  name: string;
  smoothieDescription: string;
};

const SmoothiesSection = (): JSX.Element => {
  const { t } = useTranslation('our-smoothies-page');
  const smoothies: Smoothie[] = t('smoothies');
  const [smoothie, setSmoothie] = useState<Smoothie | null>(null);

  return (
    <section className="grid gap-4 px-4 mb-8 grid-cols-2 mh:grid-cols-4 tv:grid-cols-3 th:px-0 th:grid-cols-3">
      {smoothies.map((smoothie, index) => {
        const { filename, name, smoothieDescription } = smoothie;
        return (
          <figure
            key={index}
            onClick={() => setSmoothie(smoothie)}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <LazyLoadImage src={`/assets/images/smoothies/${filename}`} effect="blur" />
            <div className="flex flex-col justify-between flex-1 p-4 bg-warmGray-50">
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

type DialogFruitProps = {
  smoothie: Smoothie;
  closeFruit: () => void;
};

type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

const DialogFruit = ({ smoothie: { filename, fruitDescription, name }, closeFruit }: DialogFruitProps) => {
  const { t } = useTranslation('our-smoothies-page');
  const [{ viewportWidth, viewportHeight }, setviewportDimensions] = useState<ViewportDimensions>({
    viewportWidth: 0,
    viewportHeight: 0
  });
  let layout = '';
  const refModalFruit = useRef<HTMLDivElement>(null);

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

  if (!(viewportWidth && viewportHeight)) return null;

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" static initialFocus={refModalFruit} open={true} onClose={closeFruit}>
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
              {layout === 'mh' ? (
                <div className="flex flex-row">
                  <div className="mr-4">
                    <Dialog.Title as="h3" className="mb-4 font-bold">
                      {name}: {t('fruit-heading-description')}
                    </Dialog.Title>
                    <p className="mt-3 text-sm text-left tv:mt-5">{fruitDescription}</p>
                  </div>
                  <LazyLoadImage
                    src={`/assets/images/fruits/${filename}`}
                    effect="blur"
                    className="mh:w-1/2 mh:h-auto"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <Dialog.Title as="h3" className="mb-4 font-bold text-center">
                    {name}: {t('fruit-heading-description')}
                  </Dialog.Title>
                  <LazyLoadImage
                    src={`/assets/images/fruits/${filename}`}
                    effect="blur"
                    className="mh:w-1/2 mh:h-auto"
                  />
                  <p className="mt-3 text-sm text-left tv:mt-5">{fruitDescription}</p>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SmoothiesSection;
