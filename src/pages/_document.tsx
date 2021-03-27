import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument(): JSX.Element {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="A platform to buy smoothies and cocktails of any kind." />
        <meta name="keywords" content="ecommerce, smoothies, cocktails" />
        <meta name="author" content="Néstor Llamas" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = Document.getInitialProps;
MyDocument.renderDocument = Document.renderDocument;
