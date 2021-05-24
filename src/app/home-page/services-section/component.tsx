import { useTranslation } from 'next-i18next';

import styles from '@/home-page/services-section/styles.module.scss';

// Functional component of the section.
const ServicesSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const { body1, body2, button1, button2, heading, heading1, heading2 } = t('servicesSection');

  // Render the section.
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <div>
        <div>
          <img src="/assets/images/misc/services1.jpg" />
          <div>
            <h3>{heading1}</h3>
            <p>{body1}</p>
            <button>{button1}</button>
          </div>
        </div>
        <div>
          <img src="/assets/images/misc/services2.jpg" />
          <div>
            <h3>{heading2}</h3>
            <p>{body2}</p>
            <button>{button2}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
