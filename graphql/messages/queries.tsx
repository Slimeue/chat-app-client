import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query GetMessages($input: MessagePaginationInput!) {
    messageQuery {
      messages(input: $input) {
        id
        content
        receiverId
        senderId
      }
    }
  }
`;
