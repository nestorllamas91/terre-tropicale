import { GetStaticProps } from 'next';
// eslint-disable-next-line import/no-internal-modules
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return locale
    ? {
        props: {
          ...(await serverSideTranslations(locale, ['our-cocktails-page', 'contact-page', 'menu', 'footer']))
        }
      }
    : {
        props: {}
      };
};

export { default } from '@/our-cocktails-page/component';
