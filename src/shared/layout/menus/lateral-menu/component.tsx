import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import CloseIcon from '@/shared/icons/close';
import CocktailIcon from '@/shared/icons/cocktail';
import ContactIcon from '@/shared/icons/contact';
import HomeIcon from '@/shared/icons/home';
import InfoIcon from '@/shared/icons/info';
import SmoothieIcon from '@/shared/icons/smoothie';
import LanguageSelector from '@/shared/language-selector/component';
import styles from '@/shared/layout/menus/lateral-menu/styles.module.scss';

const LateralMenu = ({ closeLateralMenu }: LateralMenuProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const { aboutLink, contactLink, homeLink, ourCocktailsLink, ourSmoothiesLink } = t('pageLinksSection');

  const router = useRouter();
  const activePathname = router.pathname;

  // Create a variable to serve as a reference of the root element of the modal in the DOM tree.
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;
  // Create a variable to serve as a portal element of the modal.
  const modalPortal = document.createElement('div');

  // Add the portal element of the modal to the root element of the modal.
  useEffect(() => {
    modalRoot.append(modalPortal);
    return () => {
      modalPortal.remove();
    };
  }, [modalPortal, modalRoot]);

  // Create a state variable to handle the type of fade animation of the modal.
  const [modalFade, setModalFade] = useState('in');

  // Keep checking if the Escape key is pressed, and if that happens, activate the fade out animation of the modal.
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalFade('out');
      }
    };
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Disable vertical scrolling due to modal.
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  return ReactDOM.createPortal(
    <nav
      onAnimationEnd={modalFade === 'out' ? closeLateralMenu : undefined}
      className={classNames(
        styles.modal,
        modalFade === 'in' ? styles['modal-fade-in'] : '',
        modalFade === 'out' ? styles['modal-fade-out'] : ''
      )}
    >
      <div className={styles.content}>
        <button
          onClick={() => setModalFade('out')}
          className="fixed self-end p-2 rounded hover:bg-lime-300 focus:outline-none mq2:mr-8 mq2:mt-4"
        >
          <CloseIcon className="w-6" />
        </button>
        <ul className="flex flex-col gap-y-5 mt-16 mb-5">
          {[homeLink, ourSmoothiesLink, ourCocktailsLink, aboutLink, contactLink].map(({ name, pathname }) => {
            const iconClassName = classNames(
              'w-6 mr-3',
              pathname === activePathname ? 'fill-current text-lime-600' : ''
            );
            return (
              <li key={pathname}>
                <Link href={pathname}>
                  <a
                    onClick={pathname === activePathname ? () => setModalFade('out') : undefined}
                    className={classNames(
                      'page-lateral-menu',
                      pathname === activePathname ? 'active-page' : 'inactive-page'
                    )}
                  >
                    {
                      {
                        '/': <HomeIcon className={iconClassName} />,
                        '/nos-smoothies': <SmoothieIcon className={iconClassName} />,
                        '/nos-cocktails': <CocktailIcon className={iconClassName} />,
                        '/a-propos': <InfoIcon className={iconClassName} />,
                        '/contact': <ContactIcon className={iconClassName} />
                      }[pathname as string]
                    }
                    <span className="font-heading text-sm uppercase">{name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-auto">
          <LanguageSelector place="lateral-menu" />
        </div>
      </div>
      <div onClick={() => setModalFade('out')} className={styles.overlay}></div>
    </nav>,
    modalPortal
  );
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type LateralMenuProps = {
  closeLateralMenu: () => void;
};

export default LateralMenu;
