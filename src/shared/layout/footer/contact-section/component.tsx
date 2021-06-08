import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import ContactDetailsSection from '@/contact-page/contact-details-section/component';
import styles from '@/shared/layout/footer/contact-section/styles.module.scss';

// Functional component of the section.
const ContactSection = (): JSX.Element | null => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('footer');
  const { body, button, heading } = t('contactSection');

  // Get a reference of the router API.
  const router = useRouter();

  // Render the section.
  if (['/contact', '/404', '/500'].includes(router.pathname)) return null;
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <p>{body}</p>
      <button onClick={() => router.push('/contact')}>{button}</button>
      <ContactDetailsSection />
    </section>
  );
};

export default ContactSection;
