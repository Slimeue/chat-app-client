"use client";
import { AppShell, Box } from "@mantine/core";
import RoomsList from "./components/RoomsList";
import {
  ChatRoom,
  useChatRoomsQuery,
} from "../../../../lib/types/apolloComponents";
import ConversationBox from "./components/message/ConversationBox";
import { useEffect, useState } from "react";

const RoomsPage = () => {
  const { data, loading } = useChatRoomsQuery({
    variables: {
      input: {
        limit: 10,
        page: 1,
      },
    },
    onCompleted: (data) => {
      setSelectedRoom(data.chatRoomQuery!.chatRooms!.item[0].id);
    },
  });

  const [selectedRoom, setSelectedRoom] = useState<string>("");

  if (loading) return <div>Loading....</div>;

  const rooms = data?.chatRoomQuery?.chatRooms?.item as ChatRoom[];

  return (
    <>
      <Box className="flex flex-row">
        <Box className="border-r border-r-gray-300 w-60 h-screen">
          {rooms.map((room) => (
            <RoomsList
              key={room.id}
              rooms={room}
              setReceiverId={setSelectedRoom}
            />
          ))}
        </Box>
        <Box>
          <ConversationBox receiverId={selectedRoom} />
        </Box>
      </Box>
    </>
  );
};

export default RoomsPage;
