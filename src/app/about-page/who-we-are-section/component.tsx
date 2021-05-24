import { Trans, useTranslation } from 'next-i18next';

import styles from '@/about-page/who-we-are-section/styles.module.scss';

// Functional component of the section.
const WhoWeAreSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('about-page');
  const { body, heading } = t('whoWeAreSection');

  // Render the section.
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <div>
        <Trans i18nKey={body} ns="about-page" components={{ p: <p /> }} />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
