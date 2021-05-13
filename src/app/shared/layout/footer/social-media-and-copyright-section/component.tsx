import { useTranslation } from 'next-i18next';

import FacebookIcon from '@/shared/icons/facebook';
import InstagramIcon from '@/shared/icons/instagram';
import TwitterIcon from '@/shared/icons/twitter';

const SocialMediaAndCopyrightSection = (): JSX.Element => {
  const { t } = useTranslation('footer');

  return (
    <div className="flex flex-col items-center px-4 py-3 bg-lime-100">
      <img src="/assets/logo/symbol.svg" className="h-12 mb-2" />
      <div className="flex flex-row items-center mb-2">
        <a href="https://twitter.com/TerreTropicale" rel="noreferrer" target="_blank" className="mr-5">
          <TwitterIcon className="h-6 hover:fill-current hover:text-lime-600" />
        </a>
        <a href="https://www.facebook.com/terretropicale" rel="noreferrer" target="_blank" className="mr-5">
          <FacebookIcon className="h-6 hover:fill-current hover:text-lime-600" />
        </a>
        <a href="https://www.instagram.com/terretropicale" rel="noreferrer" target="_blank">
          <InstagramIcon className="h-6 hover:fill-current hover:text-lime-600" />
        </a>
      </div>
      <span>{t('copyright', { 'current-year': new Date().getFullYear() })}</span>
    </div>
  );
};

export default SocialMediaAndCopyrightSection;
