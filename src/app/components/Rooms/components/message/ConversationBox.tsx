import { ScrollArea, Stack } from "@mantine/core";
import {
  Message,
  useGetMessagesQuery,
  useMessageSubscriptionSubscription,
} from "../../../../../../lib/types/apolloComponents";
import { FC, useState } from "react";

import ChatInputField from "./ChatInputField";

interface IProps {
  receiverId: string;
}

const ConversationBox: FC<IProps> = (props) => {
  const { receiverId } = props;
  const [newMessages, setNewMessages] = useState<Message[]>([]);
  const { data, loading } = useGetMessagesQuery({
    variables: {
      receiverId,
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
    <>
      <div className="w-full pb-5 pl-5 pr-5">
        <ScrollArea.Autosize mah="calc(100vh - 120px)" className="w-full ">
          {/* {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {newMessages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))} */}
        </ScrollArea.Autosize>
        <ChatInputField receiverId={receiverId} />
      </div>
    </>
  );
};

export default ConversationBox;
