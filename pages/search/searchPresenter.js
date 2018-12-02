import Head from 'next/head';
import { Layout, Card, Input, Row } from 'antd';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import CartButton from '../../components/CartButton';
const { Content } = Layout;
const { Meta } = Card;

export default ({ data, searchTerm, updateSearchTerm }) => (
  <>
    <Head>
      <title>Search | Nomad Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === '' ? 'Search' : `Searching by ${searchTerm}`}</h4>
      }
      rightColumn={<CartButton />}
      leftColumn={<Button href="/" text="Home" btnIcon={'home'} />}
    />
    <Content style={{ padding: '0 50px' }}>
      <Input
        placeholder={'Search by name'}
        onChange={updateSearchTerm}
        value={searchTerm}
      />
      <Row gutter={25} style={{ paddingTop: '50px' }}>
        {data && data.products && data.products && <h2>All Products</h2>}
        {data &&
          data.products &&
          data.products &&
          data.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.subtitle}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </Row>
    </Content>
  </>
);
