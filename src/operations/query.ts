import { gql } from 'graphql-tag';

export const getUsers = gql`
  # no es necesario usar comas para separar las propiedades
  query Users {
    users {
      id
      nombre
      lastName
      password
      email
      registerDate
    }
  }
`;

export const login = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ... on ResultToken {
        # agregar el fragment in line cuando se va usar una interfaz dinamica, en este caso
        # es porque puede devolver un token o devolver la informacion de un usuario
        status
        message
        elementSelect
        token
      }
    }
  }
`;

export const meData = gql`
  query Me {
    me {
      ... on ResultUser {
        status
        message
        elementSelect
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
