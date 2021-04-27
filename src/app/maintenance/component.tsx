import Head from 'next/head';

const Maintenance = (): JSX.Element => (
  <>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <div className="w-screen min-h-screen bg-lime-50">
      <div className="absolute flex flex-col items-center px-6 top-1/4 sm:inset-x-0 sm:w-2/3 sm:mx-auto lg:inset-x-0 lg:w-160 lg:mx-auto">
        <img src="/assets/logo/logo.svg" className="w-2/3 mb-5" />
        <article className="text-left">
          <h1 className="mb-3 text-3xl">We&rsquo;ll be back soon!</h1>
          <div className="paragraphs-margin">
            <p>
              Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you
              can always <a href="mailto:contact@terretropicale.com">contact us</a>, otherwise we&rsquo;ll be back
              online shortly!
            </p>
            <p>&mdash; The Team</p>
          </div>
        </article>
      </div>
    </div>
  </>
);

export default Maintenance;
