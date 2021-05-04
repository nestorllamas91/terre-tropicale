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

  const updateViewportWidth = () => setviewportWidth(window.innerWidth);

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
    <div className="flex items-center justify-between h-16 px-4 bg-lime-100 sm:px-6 lg:px-8">
      <Link href="/">
        <img src="/assets/logo/logo.svg" className="cursor-pointer h-11" />
      </Link>
      {viewportWidth >= BREAKPOINT_2 && (
        <div className="flex space-x-6">
          {pages.map(({ pathname, page }) => (
            <PageMenuNavigationBar key={pathname} pathname={pathname} page={page} activePage={activePage} />
          ))}
        </div>
      )}
      {viewportWidth < BREAKPOINT_2 && (
        <div className="flex space-x-6">
          {/* <Icon path={SHOPPING_CART.path} viewBox={SHOPPING_CART.viewBox} className="h-6" /> */}
          <button onClick={openMenuSlidable} className="focus:outline-none">
            <Icon path={MENU.path} viewBox={MENU.viewBox} className="h-6" />
          </button>
        </div>
      )}
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
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 h-screen transition-opacity bg-gray-700 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 flex flex-col h-screen space-y-4 bg-white w-72">
            <button onClick={closeMenuSlidable} className="mt-5 ml-auto mr-4 focus:outline-none">
              <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="w-6" />
            </button>
            {pages.map(({ pathname, page, icon }) => (
              <PageMenuSlidable key={pathname} pathname={pathname} page={page} icon={icon} activePage={activePage} />
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
      <h2 className="uppercase">{page}</h2>
    </a>
  </Link>
);

const PageMenuSlidable = ({ pathname, page, activePage, icon }: PageMenuSlidableProps) => (
  <Link href={pathname}>
    <a className={classNames('page-menu-slidable', activePage === pathname ? 'active-page' : 'inactive-page')}>
      <Icon path={icon.path} viewBox={icon.viewBox} className="w-6 mr-3" />
      <h2 className="uppercase">{page}</h2>
    </a>
  </Link>
);

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
};

export default Menu;
