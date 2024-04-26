"use client";
import ChatMessage from "./ChatMessage";
import {
  Message,
  useGetMessagesQuery,
  useMessageSubscriptionSubscription,
} from "../../../../../lib/types/apolloComponents";
import { FC, useState } from "react";

interface Props {
  receiverId: string;
}
const ChatBox: FC<Props> = ({ receiverId }) => {
  const [newMessages, setNewMessages] = useState<Message[]>([]);
  const { data, loading } = useGetMessagesQuery({
    variables: {
      input: {
        limit: 10,
        receiverId,
      },
    },
  });
  const { data: messageSubData } = useMessageSubscriptionSubscription({
    variables: {
      input: {
        receiverId,
      },
    },
    onData: (messageData) => {
      return setNewMessages((oldMessages) => [
        ...oldMessages,
        messageData.data.data?.messageCreated as Message,
      ]);
    },
  });
  if (loading) return <div>Loading...</div>;

  const messages = data?.messageQuery?.messages as Message[];
  return (
    <div className="flex-1 overflow-auto p-5">
      {messages?.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {newMessages?.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};
export default ChatBox;
