import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

import Icon from '@/app/shared/icon/component';
import { CLOSE, COCKTAIL, CONTACT, HOME, INFO, SMOOTHIE } from '@/data/icons.json';

type MenuSlidableProps = {
  isOpenMenuSlidable: boolean;
  closeMenuSlidable: () => void;
};

const MenuSlidable = ({ isOpenMenuSlidable, closeMenuSlidable }: MenuSlidableProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const activePathname = useRouter().asPath;

  const pages = [
    {
      page: t('home-page'),
      pathname: t('home-pathname'),
      originalPathname: t('home-pathname-original'),
      icon: HOME
    },
    {
      page: t('our-smoothies-page'),
      pathname: t('our-smoothies-pathname'),
      originalPathname: t('our-smoothies-pathname-original'),
      icon: SMOOTHIE
    },
    {
      page: t('our-cocktails-page'),
      pathname: t('our-cocktails-pathname'),
      originalPathname: t('our-cocktails-pathname-original'),
      icon: COCKTAIL
    },
    {
      page: t('about-page'),
      pathname: t('about-pathname'),
      originalPathname: t('about-pathname-original'),
      icon: INFO
    },
    {
      page: t('contact-page'),
      pathname: t('contact-pathname'),
      originalPathname: t('contact-pathname-original'),
      icon: CONTACT
    }
  ];

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
              className="ml-auto mr-2.5 mt-2.5 p-2 rounded hover:bg-lime-300 focus:outline-none mh:mr-4 mh:mt-4 tv:mr-8 tv:mt-4"
            >
              <Icon path={CLOSE.path} viewBox={CLOSE.viewBox} className="w-6" />
            </button>
            {pages.map(({ page, pathname, originalPathname, icon }) => (
              <PageMenuSlidable
                key={pathname}
                page={page}
                pathname={pathname}
                originalPathname={originalPathname}
                activePathname={activePathname}
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

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type PageMenuSlidableProps = {
  page: string;
  pathname: string;
  originalPathname: string;
  activePathname: string;
  icon: {
    path: string;
    viewBox: string;
  };
  closeMenuSlidable: () => void;
};

const PageMenuSlidable = ({
  page,
  pathname,
  originalPathname,
  activePathname,
  icon,
  closeMenuSlidable
}: PageMenuSlidableProps) => {
  const handleClick = (pathname: string) => {
    if (pathname === activePathname) {
      closeMenuSlidable();
    }
  };

  return (
    <Link href={originalPathname} as={pathname}>
      <a
        onClick={() => handleClick(pathname)}
        className={classNames('page-menu-slidable', activePathname === pathname ? 'active-page' : 'inactive-page')}
      >
        <Icon
          path={icon.path}
          viewBox={icon.viewBox}
          className={classNames('w-6 mr-3', activePathname === pathname ? 'fill-current text-lime-600' : '')}
        />
        <span className="font-heading text-sm uppercase">{page}</span>
      </a>
    </Link>
  );
};

export default MenuSlidable;
