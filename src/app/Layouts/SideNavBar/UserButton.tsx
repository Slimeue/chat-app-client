import { forwardRef } from 'react';
import { IconUser, IconSettings, IconLogout } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';
import { useAuthContext } from "@/app/context/AuthContext/auth-context";

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    status: string;
    icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
    ({ image, name, status, icon, ...others }: UserButtonProps, ref) => {
        const { signOut } = useAuthContext(); // Moved inside the component

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
                    <Avatar src={image} radius="xl" />

                    <div style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                            {name}
                        </Text>

                        <Text c="dimmed" size="xs">
                            {status}
                        </Text>
                    </div>
                    <Menu>
                        <Menu.Target>
                            {icon || <IconSettings size={24} />}
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={<IconUser size={24} />}
                                onClick={() => console.log("Profile clicked")}>
                                Profile
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<IconSettings size={24} />}
                                onClick={() => console.log("Settings clicked")}>
                                Settings
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<IconLogout size={24} />}
                                onClick={signOut}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </UnstyledButton>
        );
    }
);

export default UserButton;
