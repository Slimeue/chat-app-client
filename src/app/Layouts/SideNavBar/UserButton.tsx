import { forwardRef, useState } from 'react';
import { IconUser, IconSettings, IconLogout, IconMoonStars } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton, ActionIcon } from '@mantine/core';
import { useAuthContext } from "@/app/context/AuthContext/auth-context";
import ViewProfileModal from '@/app/components/Modals/ViewProfileModal';
import SettingsModal from '@/app/components/Modals/SettingsModal';


interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    status: string;
    icon?: React.ReactNode;
    iconnight?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
    ({ image, name, status, icon, iconnight, ...others }: UserButtonProps, ref) => {

        const [openProfile, setOpenProfileModal] = useState(false);
        const [openSettings, setOpenSettingsModal] = useState(false);
        return (
            <UnstyledButton
                ref={ref}
                style={{
                    padding: 'var(--mantine-spacing-md)',
                    color: 'var(--mantine-color-text)',
                    borderTop: '1px solid #e0e0e0'
                }}
                {...others}

            >
                <Group>
                    <Avatar src={image} radius="xl" onClick={() => setOpenProfileModal(true)} />

                    <div style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                            {name}
                        </Text>

                        <Text c="dimmed" size="xs">
                            {status}
                        </Text>
                    </div>
                    {iconnight ||
                        <ActionIcon variant="transparent">
                            <IconMoonStars size={24} />
                        </ActionIcon>}
                    {icon ||
                        <ActionIcon variant="transparent" onClick={() => setOpenSettingsModal(true)} >
                            <IconSettings size={24} />
                        </ActionIcon>}

                </Group>
                <ViewProfileModal open={openProfile} close={() => setOpenProfileModal(false)} />
                <SettingsModal open={openSettings} close={() => setOpenSettingsModal(false)}/>
            </UnstyledButton>

        );
    }
);

export default UserButton;
