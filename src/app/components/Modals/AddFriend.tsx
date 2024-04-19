import { Avatar, Box, Button, Card, Divider, Group, Modal, Text, TextInput } from "@mantine/core"
import { FC } from "react";

interface Props {
    open: boolean;
    close: () => void;
}
const AddFriendModal: FC<Props> = ({ open, close }) => {

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
                <TextInput label={'Search User'} />
                <Divider size={'sm'} />
                
                
            </Box>
        </Modal>
    )
}
export default AddFriendModal