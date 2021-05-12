import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { BREAKPOINT_1, BREAKPOINT_2 } from '@/shared/constants';

type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

const FruitsSection = (): JSX.Element | null => {
  const { t } = useTranslation('home-page');
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

  if (!(viewportWidth && viewportHeight)) return null;

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-center">{t('fruits-heading')}</h2>
      {layout === 'mv' ? (
        <div className="grid grid-cols-2">
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-guava-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-guava-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-blackberry-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-blackberry-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage
              src={`${fruitsImagesPath}/${t('fruits-passion-fruit-filename')}`}
              effect="blur"
              width="100%"
            />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-passion-fruit-name')}
            </span>
          </div>
          <div className="relative flex row-span-2">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-mango-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-mango-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-papaya-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-papaya-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage
              src={`${fruitsImagesPath}/${t('fruits-solanum-quitoense-filename')}`}
              effect="blur"
              width="100%"
            />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-solanum-quitoense-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-soursop-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-soursop-name')}
            </span>
          </div>
          <div className="relative flex col-span-2">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-tamarillo-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-tamarillo-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-pineapple-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-pineapple-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage
              src={`${fruitsImagesPath}/${t('fruits-mandarin-orange-filename')}`}
              effect="blur"
              width="100%"
            />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-mandarin-orange-name')}
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4">
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-guava-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-guava-name')}
            </span>
          </div>
          <div className="relative flex row-span-2">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-mango-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-mango-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-blackberry-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-blackberry-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage
              src={`${fruitsImagesPath}/${t('fruits-passion-fruit-filename')}`}
              effect="blur"
              width="100%"
            />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-passion-fruit-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-papaya-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-papaya-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage
              src={`${fruitsImagesPath}/${t('fruits-solanum-quitoense-filename')}`}
              effect="blur"
              width="100%"
            />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-solanum-quitoense-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-soursop-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-soursop-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-pineapple-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-pineapple-name')}
            </span>
          </div>
          <div className="relative flex">
            <LazyLoadImage
              src={`${fruitsImagesPath}/${t('fruits-mandarin-orange-filename')}`}
              effect="blur"
              width="100%"
            />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-mandarin-orange-name')}
            </span>
          </div>
          <div className="relative flex col-span-2">
            <LazyLoadImage src={`${fruitsImagesPath}/${t('fruits-tamarillo-filename')}`} effect="blur" width="100%" />
            <span className="absolute left-0 bottom-0 flex items-center px-2 py-0.5 text-white bg-black bg-opacity-20">
              {t('fruits-tamarillo-name')}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default FruitsSection;
