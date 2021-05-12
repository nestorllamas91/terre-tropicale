import { useRouter } from 'next/router';

import ContactSection from '@/shared/layout/footer/contact-section/component';
import SocialMediaAndCopyrightSection from '@/shared/layout/footer/social-media-and-copyright-section/component';

const Footer = (): JSX.Element => {
  const activePathname = useRouter().asPath;

  return (
    <footer>
      {activePathname !== '/contact' && activePathname !== '/404' && activePathname !== '/500' && <ContactSection />}
      <SocialMediaAndCopyrightSection />
    </footer>
  );
};

export default Footer;
