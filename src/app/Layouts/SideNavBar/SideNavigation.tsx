"use client";
import {
  ActionIcon,
  AppShellNavbar,
  Avatar,
  Box,
  Button,
  CloseButton,
  Code,
  Divider,
  Group,
  Image,
  Menu,
  Modal,
  MultiSelect,
  ScrollArea,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import ChatMessageCard from "./NavBarLink";
import {
  IconEdit,
  IconMoon,
  IconMoonStars,
  IconSearch,
  IconSettings,
  IconSun,
  IconUser,
  IconUserPlus,
  IconX,
} from "@tabler/icons-react";
import { FC, useState } from "react";
import NavBarLink from "./NavBarLink";
import {
  ChatRoom,
  useChatRoomsQuery,
} from "../../../../lib/types/apolloComponents";
import { useDisclosure } from "@mantine/hooks";
import AddFriendModal from "@/app/components/Modals/AddFriend";
import SettingsModal from "@/app/components/Modals/SettingsModal";
import ViewProfileModal from "@/app/components/Modals/ViewProfileModal";

interface SideChatNavProps {}
const SideChatNav: FC<SideChatNavProps> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [search, setSearch] = useState("");
  const [opened, setOpenModal] = useState(false);
  const [openAddFriend, setAddFriendModal] = useState(false);
  const [openProfile, setOpenProfileModal] = useState(false);
  const [openSettings, setOpenSettingsModal] = useState(false);
  const { data, loading } = useChatRoomsQuery({
    variables: {
      input: {
        limit: 10,
      },
    },
  });
  const rooms = data?.chatRoomQuery?.chatRooms?.item as ChatRoom[];

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Group
        justify="space-between"
        style={{ padding: 20, borderBottom: "1px solid #e0e0e0" }}
      >
        <Image src={"/smalllogo.png"} h={24} />
        <Group gap="xs">
          <ActionIcon variant="transparent" onClick={() => toggleColorScheme()}>
            {dark ? <IconSun size={18} /> : <IconMoon size={16} />}
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            onClick={() => setOpenSettingsModal(true)}
          >
            <IconSettings size={24} />
          </ActionIcon>
          <Avatar
            src={"/me2.jpg"}
            size={24}
            radius="xl"
            onClick={() => setOpenProfileModal(true)}
          />
        </Group>
      </Group>

      <Group justify="space-between" style={{ padding: 20 }}>
        <Text fw={700}>CHATS</Text>
        <Group gap="xs">
          <ActionIcon
            variant="transparent"
            onClick={() => setAddFriendModal(true)}
          >
            <IconUserPlus size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="transparent" onClick={() => setOpenModal(true)}>
            <IconEdit size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>

      <TextInput
        value={search}
        placeholder="Search"
        rightSection={
          search !== "" ? (
            <CloseButton size="sm" onClick={() => setSearch("")} />
          ) : null
        }
        onChange={(e) => setSearch(e.currentTarget.value)}
        style={{ padding: 10 }}
      />
      <div style={{ flex: 1, overflowY: "auto" }}>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          rooms?.map((room) => <ChatMessageCard key={room.id} message={room} />)
        )}
      </div>
      <AddFriendModal
        open={openAddFriend}
        close={() => setAddFriendModal(false)}
      />
      <Modal
        opened={opened}
        onClose={() => setOpenModal(false)}
        title={"Add Room"}
        centered
        size={"sm"}
        radius={"sm"}
        closeOnClickOutside={false}
        closeOnEscape={false}
      >
        <Box>
          <form>
            <TextInput label={"Room Name"}></TextInput>
            <MultiSelect
              label="Add Members"
              placeholder="Pick from your friends"
              data={["Zsarissa", "Slimeue", "Nics", "Haku"]}
            />
            <Divider my="sm" />
            <Group justify="flex-end">
              <Button>Submit</Button>
            </Group>
          </form>
        </Box>
      </Modal>

      <ViewProfileModal
        open={openProfile}
        close={() => setOpenProfileModal(false)}
      />
      <SettingsModal
        open={openSettings}
        close={() => setOpenSettingsModal(false)}
      />
    </nav>
  );
};

export default SideChatNav;
