import { useTranslation } from 'next-i18next';

import styles from '@/home-page/benefits-section/styles.module.scss';

// Functional component of the section.
const BenefitsSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const { body1, body2, body3, body4, heading } = t('benefitsSection');

  // Render the section.
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <div>
        <img src="/assets/images/misc/benefits.jpg" />
        <div>
          <div>
            <span>1</span>
            <p>{body1}</p>
          </div>
          <div>
            <span>2</span>
            <p>{body2}</p>
          </div>
          <div>
            <span>3</span>
            <p>{body3}</p>
          </div>
          <div>
            <span>4</span>
            <p>{body4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
