"use client";
import { AppShell, Box, Group, Skeleton, Stack } from "@mantine/core";
import { FC, ReactNode } from "react";
import NavBarLink from "./SideNavBar/NavBarLink";
import Header from "./Header";

export interface IProps {
  children: ReactNode;
}

const NavBarData = [
  {
    name: "Home",
    link: "/pages",
  },
  {
    name: "Profile",
    link: "/pages/profile",
  },
  {
    name: "Rooms",
    link: "/pages/rooms",
  },
];
const AppShellLayout: FC<IProps> = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 150, breakpoint: "sm" }}>
      <AppShell.Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box className="flex justify-between">
          <Header />
        </Box>
      </AppShell.Header>
      <AppShell.Navbar>
        <Stack>
          {NavBarData.map((item) => (
            <NavBarLink key={item.name} {...item} />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main >{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellLayout;
