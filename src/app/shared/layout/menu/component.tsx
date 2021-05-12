import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { BREAKPOINT_2 } from '@/shared/constants';
import MenuNavigationBar from '@/shared/layout/menu/menu-navigation-bar/component';
import MenuSlidable from '@/shared/layout/menu/menu-slidable/component';

const Menu = (): JSX.Element => {
  const { t } = useTranslation('menu');
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
    <>
      <MenuNavigationBar
        pages={pages}
        viewportWidth={viewportWidth}
        openMenuSlidable={() => setIsOpenMenuSlidable(true)}
      />
      {viewportWidth < BREAKPOINT_2 && (
        <MenuSlidable
          pages={pages}
          isOpenMenuSlidable={isOpenMenuSlidable}
          closeMenuSlidable={() => setIsOpenMenuSlidable(false)}
        />
      )}
    </>
  );
};

export default Menu;
