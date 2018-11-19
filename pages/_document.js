import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Nomad Store</title>
          <meta name="author" content="Flynn" />
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
