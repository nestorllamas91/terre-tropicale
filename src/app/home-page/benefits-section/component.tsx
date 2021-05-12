import { useTranslation } from 'next-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BenefitsSection = (): JSX.Element => {
  const { t } = useTranslation('home-page');

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-center">{t('benefits-heading')}</h2>
      <div className="relative flex">
        <LazyLoadImage src="/assets/images/misc/benefits.jpg" effect="blur" className="object-cover w-full h-72" />
        <div className="absolute flex flex-col justify-center w-full h-full p-4 text-white bg-black bg-opacity-40 mh:flex-row mh:text-center th:flex-row th:text-center tv:p-10 mh:px-10 mh:pt-20 mh:pb-10 th:p-20">
          <div className="flex flex-row items-center flex-1 mb-3 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
            <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
              1
            </span>
            <p className="text-white">{t('benefits-1-body')}</p>
          </div>
          <div className="flex flex-row items-center flex-1 mb-3 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
            <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
              2
            </span>
            <p className="text-white">{t('benefits-2-body')}</p>
          </div>
          <div className="flex flex-row items-center flex-1 mb-3 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
            <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
              3
            </span>
            <p className="text-white">{t('benefits-3-body')}</p>
          </div>
          <div className="flex flex-row items-center flex-1 mh:flex-col mh:mb-0 th:flex-col th:mr-3 th:mb-0">
            <span className="flex flex-row items-center justify-center flex-none w-10 h-10 mr-3 font-bold text-white border-2 rounded-full border-lime-700 bg-lime-500 tv:mr-3 mh:mr-0 mh:mb-3 th:mr-0 th:mb-3">
              4
            </span>
            <p className="text-white">{t('benefits-4-body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
