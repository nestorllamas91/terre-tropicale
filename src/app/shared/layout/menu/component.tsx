import { useEffect, useState } from 'react';

import { BREAKPOINT1, BREAKPOINT2, BREAKPOINT3 } from '@/shared/constants';
import MenuNavigationBar from '@/shared/layout/menu/menu-navigation-bar/component';
import MenuSlidable from '@/shared/layout/menu/menu-slidable/component';

const Menu = (): JSX.Element => {
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

  const [isOpenMenuSlidable, setIsOpenMenuSlidable] = useState(false);

  return (
    <>
      <MenuNavigationBar openMenuSlidable={() => setIsOpenMenuSlidable(true)} />
      {(layout === 1 || layout === 2 || layout === 3) && (
        <MenuSlidable isOpenMenuSlidable={isOpenMenuSlidable} closeMenuSlidable={() => setIsOpenMenuSlidable(false)} />
      )}
    </>
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

// Type for the viewport dimensions.
type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

export default Menu;
