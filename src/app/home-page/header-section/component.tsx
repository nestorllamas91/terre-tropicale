import { useTranslation } from 'next-i18next';

import styles from '@/home-page/header-section/styles.module.scss';

const HeaderSection = (): JSX.Element => {
  const { t } = useTranslation('home-page');
  const { body, heading } = t('header-section');

  return (
    <header className={styles.section}>
      <img src="/assets/images/headers/home.jpg" />
      <div>
        <h1>{heading}</h1>
        <p>{body}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
