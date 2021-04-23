import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';

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

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};

MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
