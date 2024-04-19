import { Box, Modal, SimpleGrid, Tabs, Image, } from "@mantine/core";
import { IconPhoto, IconFile,IconLink } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
    open: boolean;
    close: () => void;
}
const MediaModal: FC<Props> = ({open,close}) => {
    return (
        <Modal opened={open}
                    onClose={close}
                    title={'Media , Files, and Links'}
                    centered
                    size={'sm'}
                    radius={'sm'}
                    closeOnClickOutside={false}
                    closeOnEscape={false}>
                    <Box>
                        <Tabs defaultValue="images">
                            <Tabs.List grow>
                                <Tabs.Tab value="images" leftSection={<IconPhoto size={24} />}>
                                    Images
                                </Tabs.Tab>
                                <Tabs.Tab value="files" leftSection={<IconFile size={24} />}>
                                    Files
                                </Tabs.Tab>
                                <Tabs.Tab value="link" leftSection={<IconLink size={24} />}>
                                    Links
                                </Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="images">
                                <SimpleGrid cols={3} spacing="xs">
                                    <div> <Image
                                        radius="md"
                                        sizes='auto'
                                        src="/me2.jpg" /></div>
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
                    </Box>
                </Modal>
    )
}

export default MediaModal