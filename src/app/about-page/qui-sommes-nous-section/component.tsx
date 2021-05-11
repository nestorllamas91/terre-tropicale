import { Trans, useTranslation } from 'next-i18next';

const QuiSommesNousSection = (): JSX.Element => {
  const { t } = useTranslation('about-page');

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-center">{t('qui-sommes-nous-heading')}</h2>
      <div className="px-4 mb-4 paragraph-margin">
        <Trans ns="about-page" i18nKey="qui-sommes-nous-body" components={{ p: <p /> }} />
      </div>
    </section>
  );
};

export default QuiSommesNousSection;
