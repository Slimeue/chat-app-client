"use client"
import RoomDetails from "@/app/components/Messages/components/RoomDetails"
import MessagePage from "@/app/components/Messages/MessagePage"
import AppLayout from "@/app/Layouts/AppLayout"
import { useParams } from 'next/navigation'
import { useState } from 'react'; 

const Message = () => {
    const { messageid } = useParams() as { messageid: string };
    const [roomDetailsVisible, setRoomDetailsVisible] = useState(false); 
    const toggleRoomDetailsVisibility = () => {
        setRoomDetailsVisible(!roomDetailsVisible);
    };

    return (
        <AppLayout>
            <MessagePage receiverId={messageid} toggleRoomDetailsVisibility={toggleRoomDetailsVisibility} /> 
            {roomDetailsVisible && <RoomDetails />}
        </AppLayout>
    )
}
export default Message
