import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import withApollo from '../lib/withApollo';
import { ApolloProvider } from 'react-apollo';

class CustomApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Head>
            <title>Nomad Store</title>
            <meta name="author" content="Flynn" />
            <link
              href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(CustomApp);
