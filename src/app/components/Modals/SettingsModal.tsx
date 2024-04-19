import { useAuthContext } from "@/app/context/AuthContext/auth-context";
import { Avatar, Box, Button, Card, Divider, Group, Modal, Text, TextInput } from "@mantine/core"
import { FC } from "react";

interface Props {
    open: boolean;
    close: () => void;
}
const SettingsModal: FC<Props> = ({ open, close }) => {
    const { signOut } = useAuthContext();
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
                        <Group>
                            <Button>Change Profile</Button>
                            <Button>Remove Profile</Button>
                        </Group>

                    </Card.Section>
                </Card>
                <TextInput label={'Username'} />


                <TextInput label={'Email'} />


                <TextInput label={'Password'} />


                <Divider size={'sm'} />
                <Button>Save</Button>


            </Box>
        </Modal>
    )
}
export default SettingsModal