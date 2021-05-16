import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from '@/home-page/header-section/styles.module.scss';

const HeaderSection = (): JSX.Element => {
  const { t } = useTranslation('home-page');
  const { body, button, heading } = t('header-section');
  const router = useRouter();

  return (
    <header className={styles.section}>
      <img src="/assets/images/headers/home.jpg" />
      <div>
        <h1>{heading}</h1>
        <p>{body}</p>
        <button onClick={() => router.push('/contact')}>{button}</button>
      </div>
    </header>
  );
};

export default HeaderSection;
