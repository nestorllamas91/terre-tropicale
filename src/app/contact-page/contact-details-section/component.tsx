import { useTranslation } from 'next-i18next';

import ClockIcon from '@/shared/icons/clock';
import EmailIcon from '@/shared/icons/email';
import PhoneIcon from '@/shared/icons/phone';
import PlaceholderIcon from '@/shared/icons/placeholder';

const ContactDetailsSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');

  return (
    <section className="px-4 space-y-4">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3">
          <ClockIcon className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-schedule-label')}</span>
        </div>
        <span>{t('contact-details-schedule-description')}</span>
      </div>
      <div className="flex flex-row items-start">
        <div className="flex flex-row items-center mr-3">
          <PlaceholderIcon className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-postal-address-label')}</span>
        </div>
        <address>{t('contact-details-postal-address-description')}</address>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3">
          <PhoneIcon className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-phone-label')}</span>
        </div>
        <address>{t('contact-details-phone-description')}</address>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3">
          <EmailIcon className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-email-label')}</span>
        </div>
        <address>
          <a href="mailto:contact@terretropicale.com" rel="noreferrer" target="_blank">
            {t('contact-details-email-description')}
          </a>
        </address>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
