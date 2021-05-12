import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { Fragment } from 'react';

import { CloseIcon, CocktailIcon, ContactIcon, HomeIcon, InfoIcon, SmoothieIcon } from '@/app/shared/icons';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type MenuSlidableProps = {
  pages: {
    page: string;
    pathname: string;
    originalPathname: string;
  }[];
  isOpenMenuSlidable: boolean;
  closeMenuSlidable: () => void;
};

const MenuSlidable = ({ pages, isOpenMenuSlidable, closeMenuSlidable }: MenuSlidableProps): JSX.Element => (
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
            <CloseIcon className="w-6" />
          </button>
          <PagesMenuSlidable pages={pages} closeMenuSlidable={closeMenuSlidable} />
        </div>
      </Transition.Child>
    </Dialog>
  </Transition.Root>
);

type PagesMenuSlidableProps = {
  pages: {
    page: string;
    pathname: string;
    originalPathname: string;
  }[];
  closeMenuSlidable: () => void;
};

const PagesMenuSlidable = ({ pages, closeMenuSlidable }: PagesMenuSlidableProps) => {
  const activePathname = useRouter().asPath;

  return (
    <>
      <PageMenuSlidable
        page={pages[0].page}
        pathname={pages[0].pathname}
        originalPathname={pages[0].originalPathname}
        activePathname={activePathname}
        closeMenuSlidable={closeMenuSlidable}
      >
        <HomeIcon
          className={classNames('w-6 mr-3', activePathname === pages[0].pathname ? 'fill-current text-lime-600' : '')}
        />
      </PageMenuSlidable>
      <PageMenuSlidable
        page={pages[1].page}
        pathname={pages[1].pathname}
        originalPathname={pages[1].originalPathname}
        activePathname={activePathname}
        closeMenuSlidable={closeMenuSlidable}
      >
        <SmoothieIcon
          className={classNames('w-6 mr-3', activePathname === pages[1].pathname ? 'fill-current text-lime-600' : '')}
        />
      </PageMenuSlidable>
      <PageMenuSlidable
        page={pages[2].page}
        pathname={pages[2].pathname}
        originalPathname={pages[2].originalPathname}
        activePathname={activePathname}
        closeMenuSlidable={closeMenuSlidable}
      >
        <CocktailIcon
          className={classNames('w-6 mr-3', activePathname === pages[2].pathname ? 'fill-current text-lime-600' : '')}
        />
      </PageMenuSlidable>
      <PageMenuSlidable
        page={pages[3].page}
        pathname={pages[3].pathname}
        originalPathname={pages[3].originalPathname}
        activePathname={activePathname}
        closeMenuSlidable={closeMenuSlidable}
      >
        <InfoIcon
          className={classNames('w-6 mr-3', activePathname === pages[3].pathname ? 'fill-current text-lime-600' : '')}
        />
      </PageMenuSlidable>
      <PageMenuSlidable
        page={pages[4].page}
        pathname={pages[4].pathname}
        originalPathname={pages[4].originalPathname}
        activePathname={activePathname}
        closeMenuSlidable={closeMenuSlidable}
      >
        <ContactIcon
          className={classNames('w-6 mr-3', activePathname === pages[4].pathname ? 'fill-current text-lime-600' : '')}
        />
      </PageMenuSlidable>
    </>
  );
};

type PageMenuSlidableProps = {
  page: string;
  pathname: string;
  originalPathname: string;
  activePathname: string;
  closeMenuSlidable: () => void;
  children: ReactNode;
};

const PageMenuSlidable = ({
  page,
  pathname,
  originalPathname,
  activePathname,
  closeMenuSlidable,
  children
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
        {children}
        <span className="font-heading text-sm uppercase">{page}</span>
      </a>
    </Link>
  );
};

export default MenuSlidable;
