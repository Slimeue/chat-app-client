import { forwardRef } from 'react';
import { IconChevronRight, IconSettings } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    status: string;
    icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
    ({ image, name, status, icon, ...others }: UserButtonProps, ref) => (
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

                {icon || <IconSettings size={24} />}
            </Group>
        </UnstyledButton>
    )
);
export default UserButton