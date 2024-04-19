import { Box, Modal, SimpleGrid, Tabs, Image, MultiSelect, Divider, Group, Avatar, Text } from "@mantine/core";
import { IconPhoto, IconFile, IconLink } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
    open: boolean;
    close: () => void;
}
const UserModal: FC<Props> = ({ open, close }) => {
    return (
        <Modal opened={open}
            onClose={close}
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
                        rightSection={false} />
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
    )
}

export default UserModal