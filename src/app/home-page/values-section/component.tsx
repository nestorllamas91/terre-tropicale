import { useTranslation } from 'next-i18next';

const ValuesSection = (): JSX.Element => {
  const { t } = useTranslation('home-page');

  return (
    <section className="px-4 mb-8 tv:px-10 mh:px-4">
      <h2 className="mb-4 text-center">{t('values-heading')}</h2>
      <div className="flex flex-col mh:flex-row mh:text-center th:flex-row th:text-center">
        <div className="flex flex-row items-center flex-1 mb-4 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
          <div className="flex-none w-24 h-24 p-1 mr-4 border-2 border-red-600 rounded-full mh:mb-3 mh:mr-0 th:w-32 th:h-32 th:mb-3 th:mr-0">
            <img src="/assets/images/misc/values-1.jpg" className="rounded-full" />
          </div>
          <div>
            <h3 className="mb-1 text-lime-600">{t('values-1-heading')}</h3>
            <p>{t('values-1-body')}</p>
          </div>
        </div>
        <div className="flex flex-row items-center flex-1 mb-4 mh:flex-col mh:mr-3 mh:mb-0 th:flex-col th:mr-3 th:mb-0">
          <div className="flex-none w-24 h-24 p-1 mr-4 border-2 border-red-600 rounded-full mh:mb-3 mh:mr-0 th:w-32 th:h-32 th:mb-3 th:mr-0">
            <img src="/assets/images/misc/values-2.jpg" className="rounded-full" />
          </div>
          <div>
            <h3 className="mb-1 text-lime-600">{t('values-2-heading')}</h3>
            <p>{t('values-2-body')}</p>
          </div>
        </div>
        <div className="flex flex-row items-center flex-1 mh:flex-col th:flex-col">
          <div className="flex-none w-24 h-24 p-1 mr-4 border-2 border-red-600 rounded-full mh:mb-3 mh:mr-0 th:w-32 th:h-32 th:mb-3 th:mr-0">
            <img src="/assets/images/misc/values-3.jpg" className="rounded-full" />
          </div>
          <div>
            <h3 className="mb-1 text-lime-600">{t('values-3-heading')}</h3>
            <p>{t('values-3-body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
