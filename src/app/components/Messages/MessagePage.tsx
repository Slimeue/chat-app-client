import React, { FC } from "react";
import InputMessage from "./InputMessage";
import Header from "./Header";
import ChatBox from "./ChatBox";

interface IProps {
    receiverId: string;
  }
  
  const MessagePage: FC<IProps> = (props) => {
    const { receiverId } = props;
  
  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <Header/>
            <ChatBox receiverId={receiverId}/>
            <InputMessage receiverId={receiverId}/>
        </div>
    );
};

export default MessagePage;
