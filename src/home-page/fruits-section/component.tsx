import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import styles from '@/home-page/fruits-section/styles.module.scss';
import { BREAKPOINT1, BREAKPOINT2, BREAKPOINT3 } from '@/shared/constants';

// Functional component of the section.
const FruitsSection = (): JSX.Element | null => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const {
    andeanRaspberry,
    guava,
    heading,
    lulo,
    mandarinOrange,
    mango,
    maracuja,
    papaya,
    pineapple,
    soursop,
    tamarillo
  } = t('fruitsSection');

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
  // Sort the fruits to display them properly depending on the layout.
  const sortedFruits =
    layout === 1
      ? [guava, andeanRaspberry, maracuja, mango, papaya, lulo, soursop, tamarillo, pineapple, mandarinOrange]
      : [guava, mango, andeanRaspberry, maracuja, papaya, lulo, soursop, pineapple, mandarinOrange, tamarillo];

  // Render the section.
  if (!viewportWidth || !viewportHeight) return null;
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <div className={layout === 1 ? styles.columns2 : styles.columns4}>
        {sortedFruits.map(({ name, filename }) => (
          <div
            key={filename}
            className={classNames(
              filename === 'mango.jpg' ? styles.rowSpan2 : '',
              filename === 'tamarillo.jpg' ? styles.columnSpan2 : ''
            )}
          >
            <img src={`/assets/images/smoothies/fruits/collage/${filename}`} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
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

// Type for the viewport dimensions.
type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

export default FruitsSection;
