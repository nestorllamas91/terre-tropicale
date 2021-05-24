import { useTranslation } from 'next-i18next';

import styles from '@/home-page/values-section/styles.module.scss';

// Functional component of the section.
const ValuesSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const { body1, body2, body3, heading, heading1, heading2, heading3 } = t('valuesSection');

  // Render the section.
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <div>
        <div>
          <img src="/assets/images/misc/values1.jpg" />
          <div>
            <h3>{heading1}</h3>
            <p>{body1}</p>
          </div>
        </div>
        <div>
          <img src="/assets/images/misc/values2.jpg" />
          <div>
            <h3>{heading2}</h3>
            <p>{body2}</p>
          </div>
        </div>
        <div>
          <img src="/assets/images/misc/values3.jpg" />
          <div>
            <h3>{heading3}</h3>
            <p>{body3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
