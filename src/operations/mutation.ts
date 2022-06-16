import gql from 'graphql-tag';

export const addUser = gql`
  mutation Mutation($user: UserInput!) {
    add(user: $user) {
      ... on ResultUser {
        status
        message
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

export const updateUser = gql`
  mutation Mutation($user: UserInput!) {
    update(user: $user) {
      status
      message
      elementSelect
      ... on ResultUser {
        user {
          id
          nombre
          lastName
          email
          registerDate
        }
      }
    }
  }
`;
