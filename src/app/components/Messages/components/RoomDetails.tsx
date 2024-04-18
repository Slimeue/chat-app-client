"use client"
import { Avatar, Box, Button, Divider, Group, Modal, MultiSelect, Text, TextInput, Image, FileButton, ActionIcon, UnstyledButton, Accordion, Tabs, SimpleGrid, Menu } from "@mantine/core"
import DetailHeader from "./DetailHeader"
import { IconArrowRight, IconBellOff, IconCircleFilled, IconDots, IconEdit, IconFile, IconLink, IconNotificationOff, IconPhoto, IconPlus, IconTrash, IconUser, IconUsersPlus, IconX } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const RoomDetails = () => {
    const [openRoomModal, setOpenRoomModal] = useState(false);
    const [addUserModal, setAddUserModal] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
            <DetailHeader />
            <Avatar src={'/me3.jpg'} size={100} radius={50} style={{ alignSelf: 'center' }} />
            <Text style={{ alignSelf: 'center' }}>Chimmylan</Text>
            <Group justify="center" gap="xs">
                <ActionIcon variant="transparent">
                    <IconBellOff size={18} color="gray" stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" onClick={() => setAddUserModal(true)}>
                    <IconUsersPlus size={18} color="gray" stroke={1.5} />
                </ActionIcon>
            </Group>
            <Group justify="center" gap="xs">
                <Text size="xs" >Mute</Text>
                <Text size="xs">Add</Text>
            </Group>
            <UnstyledButton onClick={() => setOpenRoomModal(true)}
                style={{ padding: 'var(--mantine-spacing-md)', }}>
                <Group justify="space-between">
                    <Text>Customize Room</Text>
                    <IconEdit size={18} color="gray" stroke={1.5} />
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
                                        <IconDots size={18} color="gray" stroke={1.5} />
                                    </ActionIcon>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item leftSection={<IconUser size={14} />}
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
                    <Accordion.Control icon={<IconCircleFilled size={15} color="green" />}>ONLINE - 1</Accordion.Control>
                    <Accordion.Panel>
                        <Group>
                            <Avatar src={'/me3.jpg'} size={24} />
                            <Text>Slimeue</Text>
                        </Group>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item key={'id1'} value={'value1'}>
                    <Accordion.Control icon={<IconCircleFilled size={15} color="gray" />}>OFFLINE - 1</Accordion.Control>
                    <Accordion.Panel>
                        <Group>
                            <Avatar src={'/me3.jpg'} size={24} />
                            <Text>Slimeue</Text>
                        </Group>
                    </Accordion.Panel>
                </Accordion.Item>

            </Accordion>
            <Tabs defaultValue="images">
                <Tabs.List>
                    <Tabs.Tab value="images" leftSection={<IconPhoto size={24} />}>
                        Img
                    </Tabs.Tab>
                    <Tabs.Tab value="files" leftSection={<IconFile size={24} />}>
                        Files
                    </Tabs.Tab>
                    <Tabs.Tab value="link" leftSection={<IconLink size={24} />}>
                        Link
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="images">
                    <SimpleGrid cols={3} spacing="xs">
                        <div> <Image
                            radius="md"
                            sizes='auto'
                            src="/me2.jpg"
                        /></div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </SimpleGrid>
                </Tabs.Panel>

                <Tabs.Panel value="files">
                    Files
                </Tabs.Panel>

                <Tabs.Panel value="link">
                    Link
                </Tabs.Panel>
            </Tabs>

            <Modal opened={openRoomModal}
                onClose={() => setOpenRoomModal(false)}
                title={'Update Room Profile'}
                centered
                size={'sm'}
                radius={'sm'}
                closeOnClickOutside={false}
                closeOnEscape={false}>
                <Box>
                    <form>
                        <Group justify={'space-between'}>
                            <TextInput
                                label={'Room Name'}
                                variant="unstyled"
                                placeholder="Zsarissa"
                                value={value}
                                onChange={(event) => setValue(event.currentTarget.value)}
                                disabled={!isEditing} />
                            <Button onClick={() => setIsEditing(prevState => !prevState)}>
                                {isEditing ? <IconX size={16} /> : 'Edit'}
                            </Button>
                        </Group>
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {file ? (
                                <Avatar color="cyan" src={URL.createObjectURL(file)} size={100} radius={50} />
                            ) : (
                                <Avatar color="cyan" size={100} radius={50} />
                            )}
                            <Group justify="center">
                                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                                    {(props) => <Button {...props}>Edit Room Profile</Button>}
                                </FileButton>
                            </Group>
                        </Box>
                        <Divider my="sm" />
                        <Group justify="flex-end">

                            <Button>
                                Submit
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Modal>
            <Modal opened={addUserModal}
                onClose={() => setAddUserModal(false)}
                title={'Add Members'}
                centered
                size={'xs'}
                radius={'sm'}
                closeOnClickOutside={false}
                closeOnEscape={false}>
                <Box>
                    <form>
                        <MultiSelect
                            placeholder="Enter Member"
                            data={['Zsarissa', 'Slimeue']}
                            rightSection={false}
                        />
                        <Divider my="md" />
                    </form>

                    <Box style={{ padding: 15 }}>

                        <Group gap="sm">
                            <Avatar src={'/me2.jpg'} size={36} radius="xl" />
                            <div>
                                <Text size="sm">Zsarissa</Text>
                                <Text size="xs" opacity={0.5}>
                                    zsarissa@mail.com
                                </Text>
                            </div>
                        </Group>
                    </Box>
                </Box>
            </Modal>
        </div>


    )
}
export default RoomDetails