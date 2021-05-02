import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import Icon from '@/app/shared/icon/component';
import icons from '@/data/icons.json';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Menu = (): JSX.Element => {
  const [viewportWidth, setviewportWidth] = useState(0);
  const [{ isOpenMenuSlidable, isOpenMenuSlidableButton }, setOpen] = useState<Open>({
    isOpenMenuSlidable: false,
    isOpenMenuSlidableButton: false
  });

  useEffect(() => {
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
    return () => window.removeEventListener('resize', updateViewportWidth);
  }, []);

  const updateViewportWidth = () => {
    const viewportWidth = window.innerWidth;
    setviewportWidth(viewportWidth);
  };

  const handleMenuSlidableButton = () => {
    if (!isOpenMenuSlidableButton) {
      setOpen({
        isOpenMenuSlidable: true,
        isOpenMenuSlidableButton: true
      });
    } else {
      setOpen({
        isOpenMenuSlidable: false,
        isOpenMenuSlidableButton: false
      });
    }
  };

  const closeMenuSlidable = () => {
    setOpen(prevIsOpenMenuSlidable => ({
      isOpenMenuSlidable: false,
      isOpenMenuSlidableButton: prevIsOpenMenuSlidable.isOpenMenuSlidableButton
    }));
  };

  return (
    <>
      <MenuNavigationBar
        viewportWidth={viewportWidth}
        isOpenMenuSlidableButton={isOpenMenuSlidableButton}
        handleMenuSlidableButton={handleMenuSlidableButton}
      />
      {viewportWidth < 1024 && (
        <MenuSlidable isOpenMenuSlidable={isOpenMenuSlidable} closeMenuSlidable={closeMenuSlidable} />
      )}
    </>
  );
};

const MenuNavigationBar = ({
  viewportWidth,
  isOpenMenuSlidableButton,
  handleMenuSlidableButton
}: MenuNavigationBarProps) => {
  const activePage = useRouter().asPath;

  return (
    <div className="flex justify-between h-16 px-4 bg-lime-100 sm:px-6 lg:px-8">
      <div className="flex items-center flex-shrink-0">
        <Link href="/">
          <img src="/assets/logo/logo.svg" className="block w-auto h-10 cursor-pointer" />
        </Link>
      </div>
      <div className="flex sm:space-x-8">
        {viewportWidth >= 1024 &&
          [
            { pathname: '/', page: 'Accueil' },
            { pathname: '/nos-smoothies', page: 'Nos smoothies' },
            { pathname: '/nos-cocktails', page: 'Nos cocktails' },
            { pathname: '/a-propos', page: 'À propos' },
            { pathname: '/contact', page: 'Contact' }
          ].map(({ pathname, page }) => (
            <PageMenuNavigationBar key={pathname} pathname={pathname} page={page} activePage={activePage} />
          ))}
      </div>
      <div className="flex items-center">
        {/* <Icon path={SHOPPING_CART.path} viewBox={SHOPPING_CART.viewBox} className="h-6" /> */}
        {viewportWidth < 1024 && (
          <div className="inline-flex items-center justify-center ml-6">
            <button
              type="button"
              onClick={handleMenuSlidableButton}
              className={classNames('z-10 hamburger hamburger--spin', isOpenMenuSlidableButton ? 'is-active' : '')}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const MenuSlidable = ({ isOpenMenuSlidable, closeMenuSlidable }: MenuSlidableProps) => {
  const { COCKTAIL, CONTACT, HOME, INFO, SMOOTHIE } = icons;
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
          <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-700 bg-opacity-75" />
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
          <div className="fixed bottom-0 right-0 flex flex-col w-5/6 space-y-1 h-menu-slidable bg-blueGray-100">
            <div className="flex items-center h-16 px-4 bg-lime-100">
              <img src="/assets/logo/logo.svg" className="h-10" />
            </div>
            {[
              { pathname: '/', page: 'Accueil', icon: HOME },
              { pathname: '/nos-smoothies', page: 'Nos smoothies', icon: SMOOTHIE },
              { pathname: '/nos-cocktails', page: 'Nos cocktails', icon: COCKTAIL },
              { pathname: '/a-propos', page: 'À propos', icon: INFO },
              { pathname: '/contact', page: 'Contact', icon: CONTACT }
            ].map(({ pathname, page, icon }) => (
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
    <a
      className={classNames(
        'page-menu-nav-bar',
        activePage === pathname ? 'active-page' : 'inactive-page',
        'uppercase'
      )}
    >
      {page}
    </a>
  </Link>
);

const PageMenuSlidable = ({ pathname, page, activePage, icon }: PageMenuSlidableProps) => (
  <Link href={pathname}>
    <a className={classNames('page-menu-slidable', activePage === pathname ? 'active-page' : 'inactive-page')}>
      <Icon path={icon.path} viewBox={icon.viewBox} className="w-6 mr-3" />
      <span className="uppercase">{page}</span>
    </a>
  </Link>
);

type Open = {
  isOpenMenuSlidable: boolean;
  isOpenMenuSlidableButton: boolean;
};

type MenuNavigationBarProps = {
  viewportWidth: number;
  isOpenMenuSlidableButton: boolean;
  handleMenuSlidableButton: () => void;
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
