import { useTranslation } from 'next-i18next';

const HeaderSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');

  return (
    <header className="relative flex mb-8">
      <img src="/assets/images/headers/header-3.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
        <h1 className="mb-1">{t('header-heading')}</h1>
        <p className="page-subtitle">{t('header-body-1')}</p>
        <p className="page-subtitle">{t('header-body-2')}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
