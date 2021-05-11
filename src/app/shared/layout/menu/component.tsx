import { useEffect, useState } from 'react';

import MenuNavigationBar from '@/app/shared/layout/menu/menu-navigation-bar/component';
import MenuSlidable from '@/app/shared/layout/menu/menu-slidable/component';
import { BREAKPOINT_2 } from '@/data/constants.json';

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

export default Menu;
