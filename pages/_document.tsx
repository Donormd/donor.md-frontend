import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='theme-color' content='#ff4d4b' />
          <link rel='canonical' href='https://donor.md' />
          <meta name='keywords' content='' />
          <meta name='description' content='' />
          <link rel='icon' href='/app-icons/icon.ico' />
          <link rel='icon' href='/app-icons/icon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/app-icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <title>DONOR.MD - место, где люди помогают людям</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
