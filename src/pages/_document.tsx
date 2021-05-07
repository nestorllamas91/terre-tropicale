import Document, { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = (): JSX.Element => (
  <Html lang="en-US">
    <Head>
      <link href="/favicon.png" rel="shortcut icon" type="image/x-icon" />
      <link href="/assets/fonts/montserrat-semibold.ttf" rel="preload" as="font" type="font/ttf" crossOrigin="true" />
      <link href="/assets/fonts/lato-regular.ttf" rel="preload" as="font" type="font/ttf" crossOrigin="true" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = Document.getInitialProps;
MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
