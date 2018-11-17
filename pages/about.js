import Head from 'next/head';
import withLayout from '../lib/withLayout';

const About = () => (
  <div>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>About page</h1>
    <p>lorem ipsum</p>
  </div>
);

export default withLayout(About);
