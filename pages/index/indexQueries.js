import { gql } from 'apollo-boost';

export const INDEX_QUERY = gql`
  {
    categories {
      id
      createdAt
      name
    }
    onSale: products(where: { sale: true }) {
      id
      name
      subtitle
      price
      photo {
        url
      }
    }
    allProducts: products(where: { sale: false }) {
      id
      name
      subtitle
      price
      photo {
        url
      }
    }
  }
`;
