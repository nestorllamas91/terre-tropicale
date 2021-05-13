import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Header = (): JSX.Element => {
  const { t } = useTranslation('home-page');
  const router = useRouter();

  return (
    <header className="relative flex mb-8">
      <img src="/assets/images/headers/header-1.jpg" className="object-cover w-full h-auto mh:h-64 th:h-auto" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-white bg-black bg-opacity-40 tv:p-10 mh:p-10 th:p-20">
        <h1 className="mb-1">{t('header-heading')}</h1>
        <p className="mb-2 page-subtitle">{t('header-body')}</p>
        <button onClick={() => router.push('/contact')} className="button">
          {t('header-button')}
        </button>
      </div>
    </header>
  );
};

export default Header;
