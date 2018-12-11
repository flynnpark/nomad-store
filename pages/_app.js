import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import { ApolloProvider } from 'react-apollo';
import withNProgress from 'next-nprogress';
import NProgress from 'next-nprogress/component';
import withApollo from '../lib/withApollo';
import convertDataURIToBinary from '../lib/base64';
const { Footer } = Layout;

class CustomApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(swReg => {
          console.log('ServiceWorker Registered: ', swReg);
          swReg.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                  swReg.pushManager
                    .subscribe({
                      userVisibleOnly: true,
                      applicationServerKey: convertDataURIToBinary(
                        'BCplUkENepFuM5JHm2q1XdkGSc4_kPDWk-IrOysN1ec8MvHzh531WJwZ6bbPIrIie-d5rSMNbsSwzzELdUVh9i4'
                      )
                    })
                    .then(pushSubscriptionObject => {
                      console.log(pushSubscriptionObject);
                    });
                }
              });
            } else {
              console.log(subscription);
            }
          });
        })
        .catch(error => console.log("Can't register ServiceWorker: ", error));
    }
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
            <link rel="manifest" href={'/static/manifest.json'} />
            <link
              href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
              rel="stylesheet"
            />
            <style>{`body { background-color: #eff2f5 !important; }`}</style>
            <meta name="theme-color" content="black" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="Nomad Store, Buy all your nomad swag"
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
