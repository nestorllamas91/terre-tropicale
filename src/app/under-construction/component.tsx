import Head from 'next/head';

const UnderConstruction = (): JSX.Element => (
  <>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <div className="flex flex-col items-center justify-center min-h-screen bg-lime-50">
      <article className="px-6 text-left">
        <h1 className="mb-3 text-3xl">We&rsquo;ll be back soon!</h1>
        <div className="mb-5 paragraphs-margin">
          <p>
            Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you
            can always <a href="mailto:contact@terretropicale.com">contact us</a>, otherwise we&rsquo;ll be back online
            shortly!
          </p>
          <p>&mdash; The Team</p>
        </div>
      </article>
      <img src="/assets/logo/logo.svg" className="w-2/3" />
    </div>
  </>
);

export default UnderConstruction;
