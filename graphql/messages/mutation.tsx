import { gql, useMutation } from "@apollo/client";

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      content
      id
      senderId
      receiverId
    }
  }
`;
