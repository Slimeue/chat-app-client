"use client"
import { ActionIcon, AppShellNavbar, Box, Button, CloseButton, Code, Divider, Group, Menu, Modal, MultiSelect, ScrollArea, Text, TextInput } from "@mantine/core"
import ChatMessageCard from "./NavBarLink";
import { IconEdit, IconSearch, IconX } from "@tabler/icons-react";
import { FC, useState } from "react";
import NavBarLink from "./NavBarLink";
import { ChatRoom, useChatRoomsQuery } from "../../../../lib/types/apolloComponents";
import UserButton from "./UserButton";
import { useDisclosure } from "@mantine/hooks";


interface SideChatNavProps {

}
const SideChatNav: FC<SideChatNavProps> = () => {
    const [search, setSearch] = useState('');
    const [opened, { open, close }] = useDisclosure(false);

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
                <Group justify="space-between" style={{ padding: 20 }}>
                    <Text fw={700}>CHATS</Text>
                    <Group gap="xs">
                        <ActionIcon variant="transparent" onClick={open}>
                            <IconEdit size={18} color="gray" stroke={1.5} />
                        </ActionIcon>
                    </Group>
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
            <div style={{ flex: 1, overflowY: 'auto' }}>
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    rooms?.map((room) => (
                        <ChatMessageCard key={room.id} message={room} />
                    ))
                )
                }

            </div>

            <UserButton
                image="/me4.jpg"
                name="Zsarissa"
                status="online"
            />
            <Modal opened={opened}
                onClose={close}
                title={'Add Room'}
                centered
                size={'sm'}
                radius={'sm'}
                closeOnClickOutside={false}
                closeOnEscape={false}>
                <Box>
                    <form>
                        <TextInput
                            label={'Room Name'}>

                        </TextInput>
                        <MultiSelect
                            label="Add Members"
                            placeholder="Pick from your friends"
                            data={['Zsarissa', 'Slimeue', 'Nics', 'Haku']}
                        />
                        <Divider my="sm" />
                        <Group justify="flex-end">
                            <Button>
                                Submit
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Modal>
        </nav>
    );
};

export default SideChatNav