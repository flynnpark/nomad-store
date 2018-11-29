import Head from 'next/head';
import { Layout, Card, Input } from 'antd';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
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
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={'shopping-cart'} />
      }
      leftColumn={<Button href="/" text="Home" btnIcon={'home'} />}
    />
    <Content style={{ padding: '0 50px' }}>
      <Input
        placeholder={'Search by name'}
        onChange={updateSearchTerm}
        value={searchTerm}
      />
    </Content>
  </>
);
