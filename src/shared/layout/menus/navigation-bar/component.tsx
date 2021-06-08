import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { BREAKPOINT1, BREAKPOINT2, BREAKPOINT3 } from '@/shared/constants';
import MenuIcon from '@/shared/icons/menu';

const NavigationBar = ({ openLateralMenu }: NavigationBarProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const { aboutLink, contactLink, homeLink, ourCocktailsLink, ourSmoothiesLink } = t('pageLinksSection');

  // Create a state variable for setting the current viewport dimensions and being able to apply the appropriate layout.
  const [{ viewportWidth, viewportHeight }, setViewportDimensions] = useState<ViewportDimensions>({
    viewportWidth: 0,
    viewportHeight: 0
  });
  // Keep checking the resizing of the viewport and getting the current viewport dimensions.
  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportDimensions({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
    };
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  // Get the type of layout of the visitor from the viewport values.
  const layout = getLayoutType(viewportWidth, viewportHeight);

  const router = useRouter();
  const activePathname = router.pathname;

  return (
    <nav className="z-10 fixed top-0 flex justify-center items-center w-full p-2.5 bg-lime-100 shadow mq1:p-2.5 mq2:px-8 mq2:py-4 mq3:px-8 mq3:py-4">
      <div className="flex flex-row justify-start flex-none">
        <Link href={homeLink.pathname}>
          <img src="/assets/logo/logo.svg" className="h-10 cursor-pointer" />
        </Link>
      </div>
      {(layout === 4 || layout === 5) && (
        <ul className="flex flex-row justify-center flex-auto gap-x-8 whitespace-nowrap">
          {[homeLink, ourSmoothiesLink, ourCocktailsLink, aboutLink, contactLink].map(({ name, pathname }) => (
            <li key={pathname}>
              <Link href={pathname}>
                <a
                  className={classNames(
                    'page-menu-navigation-bar',
                    pathname === activePathname ? 'active-page' : 'inactive-page'
                  )}
                >
                  <span className="font-heading text-sm uppercase">{name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {viewportWidth < BREAKPOINT2 && (
        <div className="flex flex-row justify-end items-center flex-auto gap-x-3 mq3:flex-none w-48 mq3:w-auto xl:w-48">
          <button onClick={openLateralMenu} className="p-2 rounded hover:bg-lime-300 focus:outline-none">
            <MenuIcon className="h-6" />
          </button>
        </div>
      )}
    </nav>
  );
};

// Function to get the type of layout of the visitor from the viewport values.
const getLayoutType = (viewportWidth: number, viewportHeight: number) => {
  let layout = 0;
  if (viewportWidth < BREAKPOINT1) {
    // Set the layout belonging to the design of Mobile Portrait.
    layout = 1;
  } else if (viewportWidth < BREAKPOINT2) {
    // eslint-disable-next-line unicorn/prefer-ternary
    if (viewportWidth / viewportHeight > 1) {
      // Set the layout belonging to the design of Mobile Landscape.
      layout = 2;
    } else {
      // Set the layout belonging to the design of Tablet Portrait.
      layout = 3;
    }
  } else if (viewportWidth < BREAKPOINT3) {
    // Set the layout belonging to the first design of Tablet Landscape and PC.
    layout = 4;
  } else {
    // Set the layout belonging to the second design of Tablet Landscape and PC.
    layout = 5;
  }
  return layout;
};

// Function to join many strings of CSS class names in a single string.
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type NavigationBarProps = {
  openLateralMenu: () => void;
};

// Type for the viewport dimensions.
type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

export default NavigationBar;
