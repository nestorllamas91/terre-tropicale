import { GetStaticProps } from 'next';
// eslint-disable-next-line import/no-internal-modules
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return locale
    ? {
        props: {
          ...(await serverSideTranslations(locale, ['error-500-page', 'contact-page', 'menu', 'footer']))
        }
      }
    : {
        props: {}
      };
};

export { default } from '@/error-500-page/component';
