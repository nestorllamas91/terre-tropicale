import { useTranslation } from 'next-i18next';

import styles from '@/home-page/values-section/styles.module.scss';

// Functional component of the section.
const ValuesSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const { heading, imageAlt1, heading1, body1, imageAlt2, heading2, body2, imageAlt3, heading3, body3 } =
    t('valuesSection');

  // Set the data of the section.
  const data = [
    { imageSrc: '/assets/images/misc/values1.jpg', imageAlt: imageAlt1, heading: heading1, body: body1 },
    { imageSrc: '/assets/images/misc/values2.jpg', imageAlt: imageAlt2, heading: heading2, body: body2 },
    { imageSrc: '/assets/images/misc/values3.jpg', imageAlt: imageAlt3, heading: heading3, body: body3 }
  ];

  // Render the section.
  return (
    <section className={styles.section}>
      {/* Title of the section. */}
      <h2>{heading}</h2>
      {/* Body of the section. */}
      <div>
        {data.map(({ heading, body, imageSrc, imageAlt }) => (
          // Each component of the section body.
          <div key={imageSrc}>
            {/* Image. */}
            <img src={imageSrc} alt={imageAlt} />
            {/* Text. */}
            <div>
              <h3>{heading}</h3>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
