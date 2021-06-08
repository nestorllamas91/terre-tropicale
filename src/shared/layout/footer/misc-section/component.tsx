import { useTranslation } from 'next-i18next';

import FacebookIcon from '@/shared/icons/facebook';
import InstagramIcon from '@/shared/icons/instagram';
import TwitterIcon from '@/shared/icons/twitter';
import LanguageSelector from '@/shared/language-selector/component';
import styles from '@/shared/layout/footer/misc-section/styles.module.scss';

// Functional component of the section.
const MiscSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('footer');
  const { copyright, facebook, instagram, twitter } = t('miscSection');

  // Render the section.
  return (
    <section className={styles.section}>
      <LanguageSelector />
      <img src="/assets/logo/symbol.svg" />
      <div className={styles.social}>
        <a href="https://twitter.com/TerreTropicale" rel="noreferrer" target="_blank" title={twitter}>
          <TwitterIcon className={styles['social-icon']} />
        </a>
        <a href="https://www.facebook.com/terretropicale" rel="noreferrer" target="_blank" title={facebook}>
          <FacebookIcon className={styles['social-icon']} />
        </a>
        <a href="https://www.instagram.com/terretropicale" rel="noreferrer" target="_blank" title={instagram}>
          <InstagramIcon className={styles['social-icon']} />
        </a>
      </div>
      <span>{copyright}</span>
    </section>
  );
};

export default MiscSection;
