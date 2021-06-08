import { useTranslation } from 'next-i18next';

import styles from '@/our-cocktails-page/cocktails-section/styles.module.scss';
import ArrowIcon from '@/shared/icons/arrow';

// Functional component of the section.
const CocktailsSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('our-cocktails-page');
  const cocktails: Cocktail[] = t('cocktailsSection');

  // Render the section.
  return (
    <section className={styles.section}>
      {cocktails.map(({ name, ingredients, filename }) => (
        <div key={filename}>
          <img src={`/assets/images/cocktails/${filename}`} />
          <div>
            <h2>{name}</h2>
            <ul>
              {ingredients.map(ingredient => (
                <li key={ingredient}>
                  <ArrowIcon className={styles['arrow-icon']} />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

// Type for the cocktail.
type Cocktail = {
  name: string;
  ingredients: string[];
  filename: string;
};

export default CocktailsSection;
