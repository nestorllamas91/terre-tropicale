import { useEffect, useState } from 'react';

import { BREAKPOINT_1, BREAKPOINT_2, GOOGLE_MAPS_PLACE_ID } from '@/app/shared/constants.json';

type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

type IFrameCompanyLocationProps = {
  width: number;
  height: number;
};

const CompanyLocationSection = (): JSX.Element | null => {
  const [{ viewportWidth, viewportHeight }, setviewportDimensions] = useState<ViewportDimensions>({
    viewportWidth: 0,
    viewportHeight: 0
  });
  let layout = '';

  useEffect(() => {
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  const updateViewportDimensions = () => {
    setviewportDimensions({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
  };

  if (viewportWidth < BREAKPOINT_1) {
    layout = 'mv';
  } else if (viewportWidth < BREAKPOINT_2) {
    layout = viewportWidth / viewportHeight > 1 ? 'mh' : 'tv';
  } else {
    layout = 'th';
  }

  if (!(viewportWidth && viewportHeight)) return null;

  return (
    <section className="mx-auto mb-8">
      {
        {
          mv: <IFrameCompanyLocation width={300} height={250} />,
          mh: <IFrameCompanyLocation width={600} height={250} />,
          tv: <IFrameCompanyLocation width={600} height={300} />,
          th: <IFrameCompanyLocation width={900} height={300} />
        }[layout]
      }
    </section>
  );
};

const IFrameCompanyLocation = ({ width, height }: IFrameCompanyLocationProps) => {
  const mapMode = 'place';

  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/${mapMode}?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:${GOOGLE_MAPS_PLACE_ID}`}
      width={width}
      height={height}
      loading="lazy"
      allowFullScreen
      className="shadow-md mx-4"
    ></iframe>
  );
};

export default CompanyLocationSection;
