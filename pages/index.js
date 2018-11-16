import Head from 'next/head';
import Link from 'next/link';
import withLayout from '../lib/withLayout';

const Index = () => (
  <div>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Hello from the index</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default withLayout(Index);
