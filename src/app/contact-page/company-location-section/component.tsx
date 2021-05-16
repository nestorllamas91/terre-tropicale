import { GOOGLE_MAPS_PLACE_ID } from '@/shared/constants';

const CompanyLocationSection = (): JSX.Element => {
  const mapMode = 'place';

  return (
    <section className="px-4">
      <iframe
        src={`https://www.google.com/maps/embed/v1/${mapMode}?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:${GOOGLE_MAPS_PLACE_ID}`}
        loading="lazy"
        allowFullScreen
        className="mx-auto mb-8 w-full h-52 shadow"
      ></iframe>
    </section>
  );
};

export default CompanyLocationSection;
