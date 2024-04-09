import { FC } from "react";
import { Message } from "../../../../../../lib/types/apolloComponents";
import { Box, Text } from "@mantine/core";
import {
  AuthContext,
  useAuthContext,
} from "@/app/context/AuthContext/auth-context";
import { getAuthUser } from "@/app/utils/helper";

interface IProps {
  message: Message;
}
const ChatMessage: FC<IProps> = (props) => {
  const { message } = props;
  const user = getAuthUser();
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent:
            user?.id === message.senderId ? "flex-end" : "flex-start",
          margin: "5px",
          paddingRight: "10px",
        }}
      >
        <Box
          style={{
            backgroundColor:
              user?.id === message.senderId ? "#8ecae6" : "#edede9",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Text>{message.content}</Text>
        </Box>
      </Box>
    </>
  );
};
export default ChatMessage;
