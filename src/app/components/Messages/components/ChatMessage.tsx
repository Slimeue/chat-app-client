import React from "react";
import { FC } from "react";

import { ActionIcon, Avatar, Box, Group, Text } from "@mantine/core";
import {
  AuthContext,
  useAuthContext,
} from "@/app/context/AuthContext/auth-context";
import { getAuthUser } from "@/app/utils/helper";
import { Message } from "../../../../../lib/types/apolloComponents";
import { useHover } from "@mantine/hooks";
import { IconArrowBackUp, IconMoodSmile } from "@tabler/icons-react";

interface IProps {
  message: Message;
}
const ChatMessage: FC<IProps> = (props) => {
  const { message } = props;
  const user = getAuthUser();
  const { hovered, ref } = useHover();

  return (
    <div style={{
      display: 'flex',
      flexDirection: user?.id === message.senderId ? 'row-reverse' : 'row',
      alignItems: 'end',
      padding: '8px',
      gap: 10,

    }}
      ref={ref}
    >
      <Avatar src={'/me2.jpg'} alt="User avatar" size={24} />
      <div style={{
        alignSelf: user?.id === message.senderId ? 'flex-end' : 'flex-start',
        backgroundColor: user?.id === message.senderId ? '#DCF8C6' : 'transparent',
        borderRadius: '8px',
        maxWidth: '70%',
        padding: '8px'
      }}>
        <p style={{
          margin: '0', fontSize: '12px',
          textAlign: user?.id === message.senderId ? 'right' : 'left',

        }}>{'Zsarissa'}</p>
        <p style={{ margin: '0' }}>{message.content}</p>
      </div>

      {hovered && (
        <Group gap={0} style={{ alignSelf: 'center' }}>
          {user?.id === message.senderId ? (
            <>
              <ActionIcon variant="transparent">
                <IconArrowBackUp size={16} color="gray" />
              </ActionIcon>

              <ActionIcon variant="transparent">
                <IconMoodSmile size={16} color="gray" />
              </ActionIcon>
            </>
          ) : (
            <>
              <ActionIcon variant="transparent">
                <IconMoodSmile size={16} color="gray" />
              </ActionIcon>
              <ActionIcon variant="transparent">
                <IconArrowBackUp size={16} color="gray" />
              </ActionIcon>
            </>
          )}
        </Group>



      )
      }
    </div >
  );
};

export default ChatMessage;
