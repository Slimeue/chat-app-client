import React, { FC } from "react";
import InputMessage from "./components/InputMessage";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";

interface IProps {
    receiverId: string;
    toggleRoomDetailsVisibility: () => void; 
}

const MessagePage: FC<IProps> = (props) => {
    const { receiverId, toggleRoomDetailsVisibility } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }} >
            <Header toggleRoomDetailsVisibility={toggleRoomDetailsVisibility} /> 
            <ChatBox receiverId={receiverId} />
            <InputMessage receiverId={receiverId} />
        </div>
    );
};
export default MessagePage;
