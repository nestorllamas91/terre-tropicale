import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Icon from '@/app/shared/icon/component';
import { BREAKPOINT_2 } from '@/data/constants.json';
import { MENU } from '@/data/icons.json';

type MenuNavigationBarProps = {
  viewportWidth: number;
  openMenuSlidable: () => void;
};

const MenuNavigationBar = ({ viewportWidth, openMenuSlidable }: MenuNavigationBarProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const activePathname = useRouter().asPath;

  const pages = [
    {
      page: t('home-page'),
      pathname: t('home-pathname'),
      originalPathname: t('home-pathname-original')
    },
    {
      page: t('our-smoothies-page'),
      pathname: t('our-smoothies-pathname'),
      originalPathname: t('our-smoothies-pathname-original')
    },
    {
      page: t('our-cocktails-page'),
      pathname: t('our-cocktails-pathname'),
      originalPathname: t('our-cocktails-pathname-original')
    },
    {
      page: t('about-page'),
      pathname: t('about-pathname'),
      originalPathname: t('about-pathname-original')
    },
    {
      page: t('contact-page'),
      pathname: t('contact-pathname'),
      originalPathname: t('contact-pathname-original')
    }
  ];

  return (
    <div className="z-10 fixed top-0 flex justify-center items-center w-full p-2.5 bg-lime-100 shadow-md mh:p-4 tv:px-8 tv:py-4 th:px-8 th:py-4">
      <div className="flex flex-row justify-start flex-none">
        <Link href={t('home-pathname-original')} as={t('home-pathname')}>
          <img src="/assets/logo/logo.svg" className="h-10 cursor-pointer" />
        </Link>
      </div>
      {viewportWidth >= BREAKPOINT_2 && (
        <div className="flex flex-row justify-center flex-auto space-x-8 whitespace-nowrap">
          {pages.map(({ page, pathname, originalPathname }) => (
            <PageMenuNavigationBar
              key={pathname}
              page={page}
              pathname={pathname}
              originalPathname={originalPathname}
              activePathname={activePathname}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row justify-end items-center flex-auto space-x-6 th:flex-none w-48 th:w-auto xl:w-48">
        {/* <Icon path={SHOPPING_CART.path} viewBox={SHOPPING_CART.viewBox} className="h-6" /> */}
        {viewportWidth < BREAKPOINT_2 && (
          <button onClick={openMenuSlidable} className="p-2 rounded hover:bg-lime-300 focus:outline-none">
            <Icon path={MENU.path} viewBox={MENU.viewBox} className="h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type PageMenuNavigationBarProps = {
  page: string;
  pathname: string;
  originalPathname: string;
  activePathname: string;
};

const PageMenuNavigationBar = ({ page, pathname, originalPathname, activePathname }: PageMenuNavigationBarProps) => (
  <Link href={originalPathname} as={pathname}>
    <a
      className={classNames('page-menu-navigation-bar', activePathname === pathname ? 'active-page' : 'inactive-page')}
    >
      <span className="font-heading text-sm uppercase">{page}</span>
    </a>
  </Link>
);

export default MenuNavigationBar;
