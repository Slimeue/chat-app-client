"use client"
import { Group, UnstyledButton, Text, Avatar } from "@mantine/core"
import { IconChevronRight, IconDots, IconMessageReport, IconPhone, IconPhoneCall, IconReport, IconVideo } from "@tabler/icons-react"
import { FC, useState } from "react"

interface Props {
    toggleRoomDetailsVisibility: () => void; 
}

const Header: FC<Props> = ({ toggleRoomDetailsVisibility }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottom: '1px solid #e0e0e0' }}>
            <UnstyledButton
                // style={{
                //     color: 'var(--mantine-color-text)',
                // }}
                onClick={toggleRoomDetailsVisibility}> 
                <Group 
                style={{gap: 10}}>
                    <Avatar src={'/me3.jpg'} radius="xl" />
                    <Text size="sm" fw={700}> Chimmylan </Text>
                    <IconChevronRight size={24} />
                </Group>
            </UnstyledButton>
            <Group
                style={{ display: 'flex', gap: 15 }}>
                <IconPhone size={30}/>
                <IconVideo size={30}/>
            </Group>

        </div>
    )
}
export default Header