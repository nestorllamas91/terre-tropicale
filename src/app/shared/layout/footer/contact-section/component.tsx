import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import ContactDetailsSection from '@/contact-page/contact-details-section/component';

const ContactSection = (): JSX.Element => {
  const { t } = useTranslation('footer');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center px-4 mb-8">
      <h2 className="mb-4 text-center">{t('contact-heading')}</h2>
      <p className="mb-3">{t('contact-body')}</p>
      <button onClick={() => router.push('/contact')} className="button">
        {t('contact-button')}
      </button>
      <div className="mt-6">
        <ContactDetailsSection />
      </div>
    </div>
  );
};

export default ContactSection;
