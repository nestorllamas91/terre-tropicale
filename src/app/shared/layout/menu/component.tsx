import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import Icon from '@/app/shared/icon/component';
import { BREAKPOINT_2 } from '@/data/constants.json';
import { CLOSE, COCKTAIL, CONTACT, HOME, INFO, MENU, SMOOTHIE } from '@/data/icons.json';

const Menu = (): JSX.Element => {
  const [viewportWidth, setviewportWidth] = useState(0);
  const [isOpenMenuSlidable, setIsOpenMenuSlidable] = useState(false);

  useEffect(() => {
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
    return () => window.removeEventListener('resize', updateViewportWidth);
  }, []);

  const updateViewportWidth = () => {
    setviewportWidth(window.innerWidth);
  };

  return (
    <>
      <MenuNavigationBar viewportWidth={viewportWidth} openMenuSlidable={() => setIsOpenMenuSlidable(true)} />
      {viewportWidth < BREAKPOINT_2 && (
        <MenuSlidable isOpenMenuSlidable={isOpenMenuSlidable} closeMenuSlidable={() => setIsOpenMenuSlidable(false)} />
      )}
    </>
  );
};

const MenuNavigationBar = ({ viewportWidth, openMenuSlidable }: MenuNavigationBarProps) => {
  const activePage = useRouter().asPath;

  return (
    <div className="z-10 fixed top-0 flex justify-center items-center w-full p-2.5 bg-lime-100 shadow-md mh:p-4 tv:px-8 tv:py-4 th:px-8 th:py-4">
      <div className="flex flex-row justify-start flex-none w-48">
        <Link href="/">
          <img src="/assets/logo/logo.svg" className="cursor-pointer" />
        </Link>
      </div>
      {viewportWidth >= BREAKPOINT_2 && (
        <div className="flex flex-row justify-center flex-auto space-x-6 whitespace-nowrap">
          {pages.map(({ pathname, page }) => (
            <PageMenuNavigationBar key={pathname} pathname={pathname} page={page} activePage={activePage} />
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

const MenuSlidable = ({ isOpenMenuSlidable, closeMenuSlidable }: MenuSlidableProps) => {
  const activePage = useRouter().asPath;

  return (
    <Transition.Root show={isOpenMenuSlidable} as={Fragment}>
      <Dialog as="div" static open={isOpenMenuSlidable} onClose={closeMenuSlidable}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 h-screen transition-opacity bg-gray-700 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 z-20 flex flex-col h-screen space-y-4 bg-white w-72 mh:w-1/2 tv:w-72">
            <button
              onClick={closeMenuSlidable}
              className="ml-auto mr-4 mt-5 p-2 rounded hover:bg-lime-300 focus:outline-none"
            >
              <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="w-6" />
            </button>
            {pages.map(({ pathname, page, icon }) => (
              <PageMenuSlidable
                key={pathname}
                pathname={pathname}
                page={page}
                activePage={activePage}
                icon={icon}
                closeMenuSlidable={closeMenuSlidable}
              />
            ))}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

const PageMenuNavigationBar = ({ pathname, page, activePage }: PageMenuNavigationBarProps) => (
  <Link href={pathname}>
    <a className={classNames('page-menu-navigation-bar', activePage === pathname ? 'active-page' : 'inactive-page')}>
      <span className="font-heading text-sm uppercase">{page}</span>
    </a>
  </Link>
);

const PageMenuSlidable = ({ pathname, page, activePage, icon, closeMenuSlidable }: PageMenuSlidableProps) => {
  const handleClick = (pathname: string) => {
    if (pathname === activePage) {
      closeMenuSlidable();
    }
  };

  return (
    <Link href={pathname}>
      <a
        onClick={() => handleClick(pathname)}
        className={classNames('page-menu-slidable', activePage === pathname ? 'active-page' : 'inactive-page')}
      >
        <Icon
          path={icon.path}
          viewBox={icon.viewBox}
          className={classNames('w-6 mr-3', activePage === pathname ? 'fill-current text-lime-600' : '')}
        />
        <span className="font-heading text-sm uppercase">{page}</span>
      </a>
    </Link>
  );
};

const pages = [
  { pathname: '/', page: 'Accueil', icon: HOME },
  { pathname: '/nos-smoothies', page: 'Nos smoothies', icon: SMOOTHIE },
  { pathname: '/nos-cocktails', page: 'Nos cocktails', icon: COCKTAIL },
  { pathname: '/a-propos', page: 'À propos', icon: INFO },
  { pathname: '/contact', page: 'Contact', icon: CONTACT }
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type MenuNavigationBarProps = {
  viewportWidth: number;
  openMenuSlidable: () => void;
};

type MenuSlidableProps = {
  isOpenMenuSlidable: boolean;
  closeMenuSlidable: () => void;
};

type PageMenuNavigationBarProps = {
  pathname: string;
  page: string;
  activePage: string;
};

type PageMenuSlidableProps = {
  pathname: string;
  page: string;
  activePage: string;
  icon: {
    path: string;
    viewBox: string;
  };
  closeMenuSlidable: () => void;
};

export default Menu;
