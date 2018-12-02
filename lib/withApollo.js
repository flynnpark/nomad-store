import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { API_URL } from '../config';
import { defaults, resolvers } from '../resolvers';

export default withApollo(
  () =>
    new ApolloClient({
      uri: API_URL,
      clientState: {
        defaults,
        resolvers
      }
    })
);
