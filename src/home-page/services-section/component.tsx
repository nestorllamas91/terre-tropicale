import { useTranslation } from 'next-i18next';

// Functional component of the section.
const ServicesSection = (): JSX.Element => {
  // Get the texts corresponding to the section.
  const { t } = useTranslation('home-page');
  const { heading, heading1, body1, imageAlt1, heading2, body2, imageAlt2 } = t('servicesSection');

  // Set the data of the section.
  const data = [
    { heading: heading1, body: body1, imageSrc: '/assets/images/misc/services1.jpg', imageAlt: imageAlt1 },
    { heading: heading2, body: body2, imageSrc: '/assets/images/misc/services2.jpg', imageAlt: imageAlt2 }
  ];

  // Render the section.
  return (
    <section>
      {/* Title of the section. */}
      <h2 className="mb-4 px-4 text-center text-base text-black text-opacity-90 mq2:px-10 mq3:px-20 mq3:text-lg">
        {heading}
      </h2>
      {/* Body of the section. */}
      <div className="flex gap-x-1 mq1:gap-x-2 mq2:gap-x-2 mq3:gap-x-3">
        {data.map(({ heading, body, imageSrc, imageAlt }) => (
          // Each component of the section body.
          <div key={imageSrc} className="relative">
            {/* Foreground text. */}
            <div className="absolute inset-0 p-4 bg-black bg-opacity-40 flex flex-col items-start mq1:p-10 mq2:p-10 mq3:p-20">
              <h3 className="mb-1 text-sm text-white text-opacity-90 mq2:mb-2 mq3:mb-2 mq3:text-base">{heading}</h3>
              <p className="text-sm text-white text-opacity-90 mq3:text-base">{body}</p>
            </div>
            {/* Background image. */}
            <img src={imageSrc} alt={imageAlt} className="object-cover w-full h-auto mq1:h-50 mq2:h-55 mq3:h-75" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
