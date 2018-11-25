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
    console.log(apollo);
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Head>
            <title>Nomad Store</title>
            <meta name="author" content="Flynn" />
          </Head>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(CustomApp);
