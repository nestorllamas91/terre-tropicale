import { useTranslation } from 'next-i18next';

import Icon from '@/app/shared/icon/component';
import { CLOCK, EMAIL, PHONE, PLACEHOLDER } from '@/data/icons.json';

const ContactDetailsSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');

  return (
    <section className="px-4 space-y-4">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3">
          <Icon path={CLOCK.path} viewBox={CLOCK.viewBox} className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-schedule-label')}</span>
        </div>
        <span>{t('contact-details-schedule-description')}</span>
      </div>
      <div className="flex flex-row items-start">
        <div className="flex flex-row items-center mr-3">
          <Icon path={PLACEHOLDER.path} viewBox={PLACEHOLDER.viewBox} className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-postal-address-label')}</span>
        </div>
        <address>{t('contact-details-postal-address-description')}</address>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3">
          <Icon path={PHONE.path} viewBox={PHONE.viewBox} className="w-5 mr-2" />
          <span className="font-bold whitespace-nowrap">{t('contact-details-phone-label')}</span>
        </div>
        <address>{t('contact-details-phone-description')}</address>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-3">
          <Icon path={EMAIL.path} viewBox={EMAIL.viewBox} className="w-5 mr-2" />
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
