import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Users {
    userQuery {
      email
      id
    }
  }
`;
