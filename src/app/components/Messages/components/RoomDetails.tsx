"use client"
import { Avatar, Box, Button, Divider, Group, Modal, MultiSelect, Text, TextInput, Image, FileButton, ActionIcon, UnstyledButton, Accordion, Tabs, SimpleGrid, Menu, ScrollArea, CopyButton, Tooltip } from "@mantine/core"
import DetailHeader from "./DetailHeader"
import { IconArrowRight, IconBellOff, IconCheck, IconCircleFilled, IconCopy, IconDoorExit, IconDots, IconEdit, IconFile, IconLink, IconNotificationOff, IconPhoto, IconPlus, IconTrash, IconUser, IconUsersPlus, IconX } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import ViewProfileModal from "../../Modals/ViewProfileModal";
import MediaModal from "../../Modals/MediaModal";
import UserModal from "../../Modals/UserModal";
import RoomModal from "../../Modals/RoomModal";

const RoomDetails = () => {
    const [openRoomModal, setOpenRoomModal] = useState(false);
    const [addUserModal, setAddUserModal] = useState(false);
    const [openProfile, setOpenProfileModal] = useState(false);
    const [openMedia, setOpenMedia] = useState(false);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
            <DetailHeader />
            <ScrollArea >
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar src={'/me3.jpg'} size={100} radius={50} />
                    <Text>Chimmylan</Text>
                </div>

                <Group justify="center" gap="xs">
                    <ActionIcon variant="transparent">
                        <IconBellOff size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon variant="transparent" onClick={() => setAddUserModal(true)}>
                        <IconUsersPlus size={18}  stroke={1.5} />
                    </ActionIcon>
                    <CopyButton value="https://mantine.dev" timeout={2000}>
                        {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                <ActionIcon variant="subtle" onClick={copy}>
                                    {copied ? (
                                        <IconCheck size={24}/>
                                    ) : (
                                        <IconCopy size={24} />
                                    )}
                                </ActionIcon>
                            </Tooltip>
                        )}
                    </CopyButton>
                    <ActionIcon variant="transparent">
                        <IconDoorExit size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
                <Group justify="center" gap="xs">
                    <Text size="xs">Mute</Text>
                    <Text size="xs">Add</Text>
                    <Text size="xs">Link</Text>
                    <Text size="xs">Leave</Text>
                </Group>
                <UnstyledButton onClick={() => setOpenRoomModal(true)}
                    style={{ padding: 'var(--mantine-spacing-md)', }}>
                    <Group justify="space-between" gap={'xl'}>
                        <Text>Customize Room</Text>
                        <IconEdit size={18} stroke={1.5} />
                    </Group>
                </UnstyledButton>
                <UnstyledButton onClick={() => setOpenMedia(true)}
                    style={{ padding: 'var(--mantine-spacing-md)', }}>
                    <Group justify="space-between" gap={'xl'}>
                        <Text>Media, Files && Links</Text>
                        <IconEdit size={18} stroke={1.5} />
                    </Group>
                </UnstyledButton>
                <Accordion variant="filled">
                    <Accordion.Item key={'roomid'} value={'roomvalue'}>
                        <Accordion.Control>Room Members</Accordion.Control>
                        <Accordion.Panel>
                            <Group justify="space-between">
                                <Group>
                                    <Avatar src={'/me3.jpg'} size={24} />
                                    <Text>Slimeue</Text>
                                </Group>
                                <Menu>
                                    <Menu.Target>
                                        <ActionIcon variant="transparent">
                                            <IconDots size={18}  stroke={1.5} />
                                        </ActionIcon>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Item onClick={() => setOpenProfileModal(true)} leftSection={<IconUser size={14} />}
                                            rightSection={<IconArrowRight size={14} />}>
                                            View Profile
                                        </Menu.Item>
                                        <Menu.Item leftSection={<IconTrash size={14} />}>
                                            Kick Member
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item key={'id'} value={'value'}>
                        <Accordion.Control icon={<IconCircleFilled size={15} />}>ONLINE - 1</Accordion.Control>
                        <Accordion.Panel>
                            <Group>
                                <Avatar src={'/me3.jpg'} size={24} />
                                <Text>Slimeue</Text>
                            </Group>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item key={'id1'} value={'value1'}>
                        <Accordion.Control icon={<IconCircleFilled size={15} />}>OFFLINE - 1</Accordion.Control>
                        <Accordion.Panel>
                            <Group>
                                <Avatar src={'/me3.jpg'} size={24} />
                                <Text>Slimeue</Text>
                            </Group>
                        </Accordion.Panel>
                    </Accordion.Item>

                </Accordion>

                <RoomModal open={openRoomModal} close={() => setOpenRoomModal(false)} />
                <UserModal open={openProfile} close={() => setOpenProfileModal(false)} />
                <MediaModal open={openMedia} close={() => setOpenMedia(false)} />
                <ViewProfileModal open={openProfile} close={() => setOpenProfileModal(false)} />
                <UserModal open={addUserModal} close={() => setAddUserModal(false)} />
            </ScrollArea></div>


    )
}
export default RoomDetails