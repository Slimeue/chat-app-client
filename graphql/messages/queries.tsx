import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query GetMessages($receiverId: String!) {
    messageQuery {
      messages(receiverId: $receiverId) {
        id
        content
        receiverId
        senderId
      }
    }
  }
`;
