"use client"
import { Avatar, CloseButton, Image, Menu, TextInput, } from "@mantine/core"
import { IconBell, IconNotification, IconSearch, IconUserPlus } from "@tabler/icons-react"
import { FC, useState } from "react"

interface Props {

}
const Header: FC<Props> = () => {
    const [search, setSearch] = useState('');

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                    src="/catmelogoapp.png"
                    style={{ width: "24px", height: "auto" }}
                    alt="catme"
                />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IconUserPlus
                    size={30}
                    strokeWidth={2}

                    style={{ cursor: "pointer" }}
                />
                <Menu>
                    <Menu.Target>
                        <Avatar
                            src={"/profile.png"}
                            alt="User avatar"
                            radius="xl"
                            style={{ cursor: "pointer" }}
                        />
                    </Menu.Target>

                </Menu>

            </div>
        </div>)
}
export default Header