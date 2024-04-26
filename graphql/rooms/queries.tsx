import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query ChatRooms($input: ChatRoomPaginationInput!) {
    chatRoomQuery {
      chatRooms(input: $input) {
        item {
          id
          media_file_url
          media_image_url
          media_videoes_url
          name
          ownerId
          roomType
        }
        meta {
          limit
          total
        }
      }
    }
  }
`;
