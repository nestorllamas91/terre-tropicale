import { useTranslation } from 'next-i18next';

const ServicesSection = (): JSX.Element => {
  const { t } = useTranslation('home-page');

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-center">{t('services-heading')}</h2>
      <div className="flex flex-row">
        <div className="relative flex mr-1">
          <img src="/assets/images/misc/services-1.jpg" className="object-cover w-full mh:h-56 th:h-auto" />
          <div className="absolute flex flex-col items-start w-full h-full p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
            <h3 className="mb-1">{t('services-1-heading')}</h3>
            <p className="mb-3 leading-4 text-white">{t('services-1-body')}</p>
            <button className="button mt-auto">{t('services-1-button')}</button>
          </div>
        </div>
        <div className="relative flex">
          <img src="/assets/images/misc/services-2.jpg" className="object-cover w-full mh:h-56 th:h-auto" />
          <div className="absolute flex flex-col items-start w-full h-full p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
            <h3 className="mb-1">{t('services-2-heading')}</h3>
            <p className="mb-3 leading-4 text-white">{t('services-2-body')}</p>
            <button className="button mt-auto">{t('services-2-button')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
