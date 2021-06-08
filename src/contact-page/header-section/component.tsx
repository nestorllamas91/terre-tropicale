import { useTranslation } from 'next-i18next';

import styles from '@/contact-page/header-section/styles.module.scss';

// Functional component of the section.
const HeaderSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('contact-page');
  const { body1, body2, heading } = t('headerSection');

  // Render the section.
  return (
    <header className={styles.section}>
      <img src="/assets/images/headers/contact.jpg" />
      <div>
        <h1>{heading}</h1>
        <p>{body1}</p>
        <p>{body2}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
