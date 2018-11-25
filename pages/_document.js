import Document, { Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
