import { gql } from "@apollo/client";

export const MESSAGE_CREATED = gql`
  subscription MessageSubscription($input: CreateMessageSubscriptionInput!) {
    messageCreated(receiverId: $input) {
      content
      id
      receiverId
      senderId
    }
  }
`;
