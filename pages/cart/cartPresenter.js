import Head from 'next/head';
import { Button as AntButton } from 'antd';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCart from '../../components/ProductCard';

const reducerFunction = (price, product) => price + product.price;

export default ({ data }) => (
  <>
    <Head>
      <title>Cart | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>Cart</h4>}
      rightColumn={<Button href="/" text="Home" />}
      leftColumn={<Button href="/search" text="Search" />}
    />
    <div
      style={{
        marginBottom: '50px',
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        width: '100%',
        padding: '0 50px'
      }}
    >
      {data &&
        data.cart &&
        data.cart.map(product => (
          <ProductCart
            key={product.id}
            id={product.id}
            name={product.name}
            subtitle={product.description}
            price={product.price}
            photoUrl={product.photo.url}
          />
        ))}
    </div>
    <div style={{ padding: '0 50px' }}>
      <h3>
        Total price:{' '}
        {data && data.cart && `$${data.cart.reduce(reducerFunction, 0)}`}
      </h3>
      <AntButton>Check out</AntButton>
    </div>
  </>
);
