import { Box, UnstyledButton } from "@mantine/core";
import { ChatRoom } from "../../../../../lib/types/apolloComponents";
import { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  rooms: ChatRoom;
  setReceiverId: Dispatch<SetStateAction<string>>;
}
const RoomsList: FC<IProps> = (props) => {
  const { rooms, setReceiverId } = props;
  return (
    <>
      <Box className="p-5">
        <UnstyledButton onClick={() => setReceiverId(rooms.id)}>
          <h1>{rooms.name}</h1>
          <p>Last message</p>
        </UnstyledButton>
      </Box>
    </>
  );
};

export default RoomsList;
