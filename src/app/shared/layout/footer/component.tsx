import ContactSection from '@/shared/layout/footer/contact-section/component';
import MiscSection from '@/shared/layout/footer/misc-section/component';
import styles from '@/shared/layout/footer/styles.module.scss';

// Functional component of the section.
const Footer = (): JSX.Element => (
  <footer className={styles.section}>
    <ContactSection />
    <MiscSection />
  </footer>
);

export default Footer;
