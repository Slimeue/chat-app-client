import { ScrollArea } from "@mantine/core";
import {
  Message,
  useGetMessagesQuery,
  useMessageSubscriptionSubscription,
} from "../../../../../../lib/types/apolloComponents";
import { FC, useState } from "react";

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
      <ScrollArea.Autosize>
        <div>
          {messages.map((message) => (
            <div key={message.id}>{message.content}</div>
          ))}
          {newMessages.map((message) => (
            <div key={message.id}>{message.content}</div>
          ))}
        </div>
      </ScrollArea.Autosize>
    </>
  );
};

export default ConversationBox;
