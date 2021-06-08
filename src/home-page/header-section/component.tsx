import { useTranslation } from 'next-i18next';

// Functional component of the section.
const HeaderSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const { heading, body, imageAlt } = t('headerSection');

  // Set the path of the image.
  const imageSrc = '/assets/images/headers/home.jpg';

  // Render the section.
  return (
    <header className="relative">
      {/* Foreground text. */}
      <div className="absolute inset-0 p-4 bg-black bg-opacity-40 flex flex-col items-start justify-center mq1:p-10 mq2:p-10 mq3:p-20">
        <h1 className="mb-1 text-xl text-white text-opacity-90 mq2:mb-2 mq3:mb-2 mq3:text-2xl">{heading}</h1>
        <p className="text-base text-white text-opacity-90 mq3:text-lg">{body}</p>
      </div>
      {/* Background image. */}
      <img src={imageSrc} alt={imageAlt} className="object-cover w-full h-auto mq1:h-48 mq2:h-56 mq3:h-72" />
    </header>
  );
};

export default HeaderSection;
