import { useTranslation } from 'next-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ArrowIcon from '@/shared/icons/arrow';

type Cocktail = {
  filename: string;
  ingredients: string[];
  name: string;
};

const CocktailsSection = (): JSX.Element => {
  const { t } = useTranslation('our-cocktails-page');
  const cocktails: Cocktail[] = t('cocktails');

  return (
    <section className="grid grid-cols-1 gap-4 mb-8 px-4 mh:grid-cols-2 tv:grid-cols-2 th:grid-cols-2 th:px-0">
      {cocktails.map((cocktail, index) => {
        const { filename, ingredients, name } = cocktail;
        return (
          <figure key={index} className="flex flex-row overflow-hidden rounded-lg shadow-lg">
            <LazyLoadImage
              src={`/assets/images/cocktails/${filename}`}
              effect="blur"
              width="50%"
              className="object-cover w-1/2"
            />
            <div className="flex flex-col flex-1 p-4 bg-warmGray-50">
              <h3 className="mb-2 text-lime-600">{name}</h3>
              <ul className="space-y-1">
                {ingredients.map(ingredient => (
                  <li key={ingredient} className="flex flex-row items-center">
                    <ArrowIcon className="w-3 mr-2" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </figure>
        );
      })}
    </section>
  );
};

export default CocktailsSection;
