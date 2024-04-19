import { Box, Modal, SimpleGrid, Tabs, Image,Group, TextInput, Button, Avatar, FileButton, Divider,} from "@mantine/core";
import { IconPhoto, IconFile, IconLink, IconX } from "@tabler/icons-react";
import { FC, useState,} from "react";

interface Props {
    open: boolean;
    close: () => void;
}
const RoomModal: FC<Props> = ({ open, close }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');
    return (
        <Modal opened={open}
            onClose={close}
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
    )
}

export default RoomModal