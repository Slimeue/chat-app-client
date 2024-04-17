"use client"
import MessagePage from "@/app/components/Messages/MessagePage"
import AppLayout from "@/app/Layouts/AppLayout"
import { useParams } from 'next/navigation'

const Message = () => {
    const { messageid } = useParams() as { messageid: string }
    return (
        <AppLayout>
            <MessagePage receiverId={messageid}/>
        </AppLayout>
    )
}
export default Message
