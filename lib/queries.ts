// queries.ts

import { gql } from '@apollo/client';

export const GET_DESTINATIONS = gql`
  query {
    destinationCollection {
      items {
        title
        intro_blurb
        slug
        region {
          title
        }
      }
    }
  }
`;