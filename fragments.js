import { gql } from 'apollo-boost';

export const PRODUCT_FRAGMENT = gql`
  fragment ProductItems on Product {
    id
    name
    subtitle
    price
    onCart @client
    photo {
      url
    }
  }
`;
