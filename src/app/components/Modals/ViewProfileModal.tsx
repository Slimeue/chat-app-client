
import { Box, Card, Group, Modal, Image, Text, Badge, Button, Avatar, Divider, Tabs } from "@mantine/core"
import { FC, useState } from "react";

interface Props {
    open: boolean;
    close: () => void;
}
const ViewProfileModal: FC<Props> = ({ open, close }) => {

    return (
        <Modal opened={open}
            onClose={close}
            title={'Profile'}
            centered
            size={'md'}
            radius={'sm'}
            closeOnClickOutside={false}
            closeOnEscape={false}>
            <Box>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Avatar
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            size={100}
                            radius={50}
                            alt="Norway"
                        />

                    </Card.Section>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Zsarissa</Text>
                        <Badge color="blue">Friends</Badge>
                    </Group>
                    <Divider size={'sm'} />
                    <Tabs color="teal" defaultValue="friends">
                        <Tabs.List>
                            <Tabs.Tab value="friends">Friends</Tabs.Tab>
                            <Tabs.Tab value="mutualfriends" color="blue">
                                Mutual Friends
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="friends" pt="xs">
                            First tab color is teal, it gets this value from context
                        </Tabs.Panel>

                        <Tabs.Panel value="mutualfriends" pt="xs">
                            Second tab color is blue, it gets this value from props, props have the priority and will
                            override context value
                        </Tabs.Panel>
                    </Tabs>

                </Card>
            </Box>
        </Modal>
    )
}
export default ViewProfileModal