"use client"
import { Card, Image, Avatar , Text} from "@mantine/core";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChatRoom } from "../../../../lib/types/apolloComponents";


interface ChatMessageCardProps {
    message: ChatRoom;
 
}

const ChatMessageCard: FC<ChatMessageCardProps> = ({ message}) => {
  const router = useRouter();
   
    return (
        <Link href={`/app/${message.id}`}
            className={`chat-message-card`}
            style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', gap:10, padding:10, marginTop:2}}
           
        >
            <Avatar src={'/me2.jpg'} alt="User avatar" />
            <div style={{ flexGrow: 1 }}>
                <Text fw={500}>{message.name}</Text>
                <Text size="sm" lineClamp={1}>{message.ownerId}</Text>
            </div>
        </Link>
    );
};

export default ChatMessageCard;