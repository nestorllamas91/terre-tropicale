import { useTranslation } from 'next-i18next';

const IntroSection = (): JSX.Element => {
  const { t } = useTranslation('contact-page');

  return (
    <section className="mb-8 px-4">
      <p>{t('intro-body')}</p>
    </section>
  );
};

export default IntroSection;
