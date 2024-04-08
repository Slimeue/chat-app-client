import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query ChatRooms($input: ChatRoomPaginationInput!) {
    chatRoomQuery {
      chatRooms(input: $input) {
        item {
          id
          name
          ownerId
        }
        meta {
          total
          page
          limit
        }
      }
    }
  }
`;
