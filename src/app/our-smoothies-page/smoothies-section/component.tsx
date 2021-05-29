import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from '@/our-smoothies-page/smoothies-section/styles.module.scss';
import { BREAKPOINT1, BREAKPOINT2, BREAKPOINT3 } from '@/shared/constants';
import CloseIcon from '@/shared/icons/close';

// Functional component of the section.
const SmoothiesSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('our-smoothies-page');
  const { smoothieAnimation, smoothiesAndFruits } = t('smoothiesSection');

  // Create a state variable to handle the fruit corresponding to the clicked smoothie.
  const [fruit, setFruit] = useState<SmoothieAndFruit['fruit'] | null>(null);

  // Render the section.
  return (
    <section className={styles.section}>
      {smoothiesAndFruits.map(({ smoothie: { description, filename, name }, fruit }: SmoothieAndFruit) => (
        <div key={filename} onClick={() => setFruit(fruit)}>
          <div className={styles.image}>
            <img src={`/assets/images/smoothies/${filename}`} />
            <div>
              <h2>
                {name}: {smoothieAnimation.headingDescription}
              </h2>
              <span>{smoothieAnimation.body}</span>
            </div>
          </div>
          <div className={styles.text}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      ))}
      {fruit && <FruitModal fruit={fruit} closeFruitModal={() => setFruit(null)} />}
    </section>
  );
};

// Functional component of the fruit modal.
const FruitModal = ({ fruit: { description, filename, name }, closeFruitModal }: FruitModalProps) => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('our-smoothies-page');
  const {
    fruitModal: { headingDescription }
  } = t('smoothiesSection');

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
    return () => {
      window.removeEventListener('resize', updateViewportDimensions);
    };
  }, []);

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

  // Get the type of layout of the visitor from the viewport values.
  const layout = getLayoutType(viewportWidth, viewportHeight);

  // Render the section.
  if (!viewportWidth || !viewportHeight) return null;
  return ReactDOM.createPortal(
    <div
      onAnimationEnd={modalFade === 'out' ? closeFruitModal : undefined}
      className={classNames(
        styles.modal,
        modalFade === 'in' ? styles['modal-fade-in'] : '',
        modalFade === 'out' ? styles['modal-fade-out'] : ''
      )}
    >
      <div className={styles.content}>
        {layout === 2 ? (
          <div className={styles['mobile-landscape-layout']}>
            <button
              onClick={() => setModalFade('out')}
              className="self-end p-2 rounded hover:bg-lime-300 focus:outline-none"
            >
              <CloseIcon className="w-6" />
            </button>
            <div>
              <div>
                <h2>
                  {name}: {headingDescription}
                </h2>
                <p>{description}</p>
              </div>
              <img src={`/assets/images/smoothies/fruits/${filename}`} />
            </div>
          </div>
        ) : (
          <div className={styles['general-layout']}>
            <button
              onClick={() => setModalFade('out')}
              className="self-end p-2 rounded hover:bg-lime-300 focus:outline-none"
            >
              <CloseIcon className="w-6" />
            </button>
            <h2>
              {name}: {headingDescription}
            </h2>
            <img src={`/assets/images/smoothies/fruits/${filename}`} />
            <p>{description}</p>
          </div>
        )}
      </div>
      <div onClick={() => setModalFade('out')} className={styles.overlay}></div>
    </div>,
    modalPortal
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

// Type for the smoothies and the fruits.
type SmoothieAndFruit = {
  smoothie: {
    name: string;
    description: string;
    filename: string;
  };
  fruit: {
    name: string;
    description: string;
    filename: string;
  };
};

// Type for the props of the FruitModal functional component.
type FruitModalProps = {
  fruit: SmoothieAndFruit['fruit'];
  closeFruitModal: () => void;
};

// Type for the viewport dimensions.
type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

export default SmoothiesSection;
