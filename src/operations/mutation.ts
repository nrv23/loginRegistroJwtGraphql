import gql from 'graphql-tag';

export const addUser = gql`
  mutation Mutation($user: UserInput!) {
    add(user: $user) {
      status
      message
      elementSelect
      ... on ResultUser {
        status
        message
        elementSelect
        user {
          id
          lastName
          nombre
          email
          registerDate
        }
      }
    }
  }
`;
