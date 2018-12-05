import Head from 'next/head';
import { Layout, Row, Card } from 'antd';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import CartButton from '../../components/CartButton';
const { Content } = Layout;
const { Meta } = Card;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>Nomad Store</h4>}
      rightColumn={<CartButton />}
      leftColumn={<Button href="/search" text="Search" btnIcon={'search'} />}
    />
    <Content style={{ padding: '0 50px' }}>
      <div
        style={{
          display: 'grid',
          gridGap: '10px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          width: '100%'
        }}
      >
        {data &&
          data.categories &&
          data.categories.map(category => (
            <Button
              key={category.id}
              href={`/category?name=${category.name.toLowerCase()}`}
              hrefAs={`/category/${category.name.toLowerCase()}`}
              text={`${category.name}`}
            />
          ))}
      </div>
      <div style={{ paddingTop: '50px' }}>
        {data && data.onSale && data.onSale && <h2>On Sale</h2>}
        <div
          style={{
            display: 'grid',
            gridGap: '10px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            width: '100%'
          }}
        >
          {data &&
            data.onSale &&
            data.onSale &&
            data.onSale.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                subtitle={product.subtitle}
                price={product.price}
                photoUrl={product.photo.url}
              />
            ))}
        </div>
      </div>
      <div style={{ paddingTop: '50px' }}>
        {data && data.allProducts && data.allProducts && <h2>All Products</h2>}
      </div>
      <div
        style={{
          display: 'grid',
          gridGap: '10px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          width: '100%'
        }}
      >
        {data &&
          data.allProducts &&
          data.allProducts &&
          data.allProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.subtitle}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </div>
    </Content>
  </>
);
