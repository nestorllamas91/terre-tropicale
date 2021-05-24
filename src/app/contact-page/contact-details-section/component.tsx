import { useTranslation } from 'next-i18next';

import styles from '@/contact-page/contact-details-section/styles.module.scss';
import ClockIcon from '@/shared/icons/clock';
import EmailIcon from '@/shared/icons/email';
import PhoneIcon from '@/shared/icons/phone';
import PlaceholderIcon from '@/shared/icons/placeholder';

const ContactDetailsSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');
  const { address, email, openingHours, phone } = t('contactDetailsSection');

  return (
    <section className={styles.section}>
      <div>
        <div>
          <ClockIcon className={styles['contact-icon']} />
          <span>{openingHours.label}</span>
        </div>
        <span>{openingHours.description}</span>
      </div>
      <div>
        <div>
          <PlaceholderIcon className={styles['contact-icon']} />
          <span>{address.label}</span>
        </div>
        <address>{address.description}</address>
      </div>
      <div>
        <div>
          <PhoneIcon className={styles['contact-icon']} />
          <span>{phone.label}</span>
        </div>
        <address>{phone.description}</address>
      </div>
      <div>
        <div>
          <EmailIcon className={styles['contact-icon']} />
          <span>{email.label}</span>
        </div>
        <address>
          <a href="mailto:contact@terretropicale.com" rel="noreferrer" target="_blank">
            {email.description}
          </a>
        </address>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
