import { useTranslation } from 'next-i18next';

import styles from '@/contact-page/introduction-section/styles.module.scss';

const IntroductionSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');
  const { body } = t('introductionSection');

  return (
    <section className={styles.section}>
      <p>{body}</p>
    </section>
  );
};

export default IntroductionSection;
