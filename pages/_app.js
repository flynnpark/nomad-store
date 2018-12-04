import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import { ApolloProvider } from 'react-apollo';
import withNProgress from 'next-nprogress';
import NProgress from 'next-nprogress/component';
import withApollo from '../lib/withApollo';
const { Footer } = Layout;

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
        <NProgress spinner={false} />
        <Container>
          <Head>
            <title>Nomad Store</title>
            <meta name="author" content="Flynn" />
            <link
              href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
              rel="stylesheet"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withNProgress()(withApollo(CustomApp));
