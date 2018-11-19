import Head from 'next/head';
import { withRouter } from 'next/router';

const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>{props.title}</h1>
    <p>lorem ipsum</p>
  </div>
);

Movie.getInitialProps = async () => {
  return { title: 'Hey!' };
};

export default withRouter(Movie);
