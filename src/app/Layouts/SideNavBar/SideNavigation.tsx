"use client"
import { ActionIcon, AppShellNavbar, CloseButton, Code, Group, Menu, ScrollArea, Text, TextInput } from "@mantine/core"
import ChatMessageCard from "./NavBarLink";
import { IconEdit, IconSearch, IconX } from "@tabler/icons-react";
import { FC, useState } from "react";
import NavBarLink from "./NavBarLink";
import { ChatRoom, useChatRoomsQuery } from "../../../../lib/types/apolloComponents";
import UserButton from "./UserButton";
import { useAuthContext } from "@/app/context/AuthContext/auth-context";


interface SideChatNavProps {

}
const SideChatNav: FC<SideChatNavProps> = () => {
    const [search, setSearch] = useState('');
    const { signOut } = useAuthContext();
    const { data, loading } = useChatRoomsQuery({
        variables: {
            input: {
                limit: 10,
                page: 1,
            }
        }
    })
    const rooms = data?.chatRoomQuery?.chatRooms?.item as ChatRoom[]

    return (
        <nav style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <div>
                <Group justify="space-between" style={{ padding: 10, borderBottom: '1px solid #e0e0e0'}}>
                    <Text fw={700}>CHATS</Text>
                    <IconEdit
                        size={24}
                        strokeWidth={2}
                        color={'black'}
                        style={{ cursor: 'pointer' }}
                        onClick={() => console.log('Edit')} />
                </Group>
                <TextInput
                    value={search}
                    placeholder="Search"
                    rightSection={
                        search !== '' ? <CloseButton size="sm" onClick={() => setSearch('')} /> : null
                    }
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    style={{ padding: 10 }}
                />
            </div>
            <div style={{ flex: 1,overflowY: 'auto' }}>
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    rooms?.map((room) => (
                        <ChatMessageCard key={room.id} message={room} />
                    ))
                )
                }

            </div>
            <Menu withArrow>
                <Menu.Target>
                    <UserButton
                        image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                        name="Harriette Spoonlicker"
                        status="online"
                    />
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        leftSection={<IconSearch size={24}/>}>
                            Profile
                        </Menu.Item>
                        <Menu.Item
                        leftSection={<IconSearch size={24}/>}>
                            Settings
                        </Menu.Item>
                        <Menu.Item
                        leftSection={<IconSearch size={24}/>}
                        onClick={() => signOut()}>
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
            </Menu>
        </nav>
    );
};

export default SideChatNav;