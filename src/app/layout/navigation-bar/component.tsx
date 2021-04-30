import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Icon from '@/app/icon/component';
import icons from '@/data/icons.json';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const NavigationBar = (): JSX.Element => {
  const { CLOSE, COCKTAIL, CONTACT, HOME, INFO, MENU, SHOPPING_CART, SMOOTHIE } = icons;
  const [viewportWidth, setviewportWidth] = useState(0);
  const activePage = useRouter().asPath;

  useEffect(() => {
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
    return () => window.removeEventListener('resize', updateViewportWidth);
  }, []);

  const updateViewportWidth = () => {
    const viewportWidth = window.innerWidth;
    setviewportWidth(viewportWidth);
  };

  return (
    <Disclosure as="nav" className="relative bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl bg-lime-100 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center flex-shrink-0">
                <Link href="/">
                  <img src="/assets/logo/logo.svg" className="block w-auto h-8 cursor-pointer" />
                </Link>
              </div>
              {viewportWidth >= 1024 && (
                <div className="flex sm:space-x-8">
                  <Link href="/">
                    <a className={classNames('nav-bar-page', activePage === '/' ? 'active-page' : 'inactive-page')}>
                      ACCUEIL
                    </a>
                  </Link>
                  <Link href="/nos-smoothies">
                    <a
                      className={classNames(
                        'nav-bar-page',
                        activePage === '/nos-smoothies' ? 'active-page' : 'inactive-page'
                      )}
                    >
                      NOS SMOOTHIES
                    </a>
                  </Link>
                  <Link href="/nos-cocktails">
                    <a
                      className={classNames(
                        'nav-bar-page',
                        activePage === '/nos-cocktails' ? 'active-page' : 'inactive-page'
                      )}
                    >
                      NOS COCKTAILS
                    </a>
                  </Link>
                  <Link href="/a-propos">
                    <a
                      className={classNames(
                        'nav-bar-page',
                        activePage === '/a-propos' ? 'active-page' : 'inactive-page'
                      )}
                    >
                      À PROPOS
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={classNames(
                        'nav-bar-page',
                        activePage === '/contact' ? 'active-page' : 'inactive-page'
                      )}
                    >
                      CONTACT
                    </a>
                  </Link>
                </div>
              )}
              <div className="flex items-center">
                <Icon path={SHOPPING_CART.path} viewBox={SHOPPING_CART.viewBox} className="h-6" />
                {viewportWidth < 1024 && (
                  <Disclosure.Button className="inline-flex items-center justify-center ml-6 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="h-5" aria-hidden="true" />
                    ) : (
                      <Icon path={MENU.path} viewBox={MENU.viewBox} className="h-5" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                )}
              </div>
            </div>
          </div>
          {viewportWidth < 1024 && (
            <Disclosure.Panel className="absolute right-0 z-10 block w-64 h-screen transition-all duration-1000 ease-out bg-blueGray-200">
              <div className="pt-2 space-y-1 ">
                <Link href="/">
                  <a className={classNames('menu-page', activePage === '/' ? 'active-page' : 'inactive-page')}>
                    <Icon path={HOME.path} viewBox={HOME.viewBox} className="w-6 mr-3" />
                    <span>ACCUEIL</span>
                  </a>
                </Link>
                <Link href="/nos-smoothies">
                  <a
                    className={classNames(
                      'menu-page',
                      activePage === '/nos-smoothies' ? 'active-page' : 'inactive-page'
                    )}
                  >
                    <Icon path={SMOOTHIE.path} viewBox={SMOOTHIE.viewBox} className="w-6 mr-3" />
                    <span>NOS SMOOTHIES</span>
                  </a>
                </Link>
                <Link href="/nos-cocktails">
                  <a
                    className={classNames(
                      'menu-page',
                      activePage === '/nos-cocktails' ? 'active-page' : 'inactive-page'
                    )}
                  >
                    <Icon path={COCKTAIL.path} viewBox={COCKTAIL.viewBox} className="w-6 mr-3" />
                    <span>NOS COCKTAILS</span>
                  </a>
                </Link>
                <Link href="/a-propos">
                  <a className={classNames('menu-page', activePage === '/a-propos' ? 'active-page' : 'inactive-page')}>
                    <Icon path={INFO.path} viewBox={INFO.viewBox} className="w-6 mr-3" />
                    <span>À PROPOS</span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className={classNames('menu-page', activePage === '/contact' ? 'active-page' : 'inactive-page')}>
                    <Icon path={CONTACT.path} viewBox={CONTACT.viewBox} className="w-6 mr-3" />
                    <span>CONTACT</span>
                  </a>
                </Link>
              </div>
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default NavigationBar;
