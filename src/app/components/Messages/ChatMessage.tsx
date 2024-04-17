import React from "react";
import { FC } from "react";

import { Avatar, Box, Text } from "@mantine/core";
import {
  AuthContext,
  useAuthContext,
} from "@/app/context/AuthContext/auth-context";
import { getAuthUser } from "@/app/utils/helper";
import { Message } from "../../../../lib/types/apolloComponents";

interface IProps {
  message: Message;
}
const ChatMessage: FC<IProps> = (props) => {
const { message } = props;
const user = getAuthUser();

    return (
        <div style={{
          display: 'flex',
          flexDirection:  user?.id === message.senderId ? 'row-reverse' : 'row',
          alignItems:'center',
          gap: 5
        }}>
           <Avatar src={'/me2.jpg'} alt="User avatar" size={24} />
            <div style={{
               alignSelf:  user?.id === message.senderId ? 'flex-end' : 'flex-start',
               backgroundColor:  user?.id === message.senderId ? '#DCF8C6' : '#E5E7EA',
               borderRadius: '8px',
               padding: '8px',
               marginBottom: '8px',
               maxWidth: '70%',
            }}>
                <p style={{ margin: '0' }}>{message.content}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
