// apolloClient.ts

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentstack.io/stacks/blt4e4bab83e0d9bcf1/graphql', // Your Contentstack GraphQL endpoint
  cache: new InMemoryCache(),
  headers: {
    'Authorization': 'Bearer cs63ca679de7990b275889c72b' // Your Delivery Token
  }
});

export default client;