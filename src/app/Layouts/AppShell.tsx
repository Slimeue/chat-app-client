"use client";
import { AppShell, Box, Group, Skeleton, Stack } from "@mantine/core";
import { FC, ReactNode } from "react";
import NavBarLink from "./SideNavBar/NavBarLink";
import Header from "./Header";
import SideChatNav from "./SideNavBar/SideNavigation";

export interface IProps {
  children: ReactNode;
}

// const NavBarData = [
//   {
//     name: "Home",
//     link: "/pages",
//   },
//   {
//     name: "Profile",
//     link: "/app/profile",
//   },
//   {
//     name: "Rooms",
//     link: "/app/rooms",
//   },
// ];
const AppShellLayout: FC<IProps> = ({ children }) => {
  return (
    <AppShell
      // header={{ height: 40 }}
      navbar={{ width: 300, breakpoint: "sm" }}>
      {/* <AppShell.Header>
        <Header />
      </AppShell.Header> */}
      <AppShell.Navbar>
        <Box
          style={{
            display: "flex",
            height: "calc(100vh)",

          }}>

          <SideChatNav />
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>
        <Box
          style={{
            display: "flex",
            height: "calc(100vh)",
          }}
        >
          {children}
        </Box>
      </AppShell.Main>
    </AppShell >
  );
};

export default AppShellLayout;
