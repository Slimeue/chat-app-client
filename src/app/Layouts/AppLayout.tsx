"use client";
import { FC, ReactNode, useEffect } from "react";
import AppShellLayout from "./AppShell";
import { useAuthContext } from "../context/AuthContext/auth-context";
import { STATUS } from "../utils/types";
import { redirect, useRouter } from "next/navigation";
import { getStatus } from "../utils/helper";

interface IProps {
  children: ReactNode;
}
const AppLayout: FC<IProps> = ({ children }) => {
  useEffect(() => {
    const status = getStatus();
    if (status !== STATUS.AUTHENTICATED) {
      console.log(`Status: ${status}`);
      redirect("/");
    }
  });

  return (
    <>
      <AppShellLayout>{children}</AppShellLayout>
    </>
  );
};

export default AppLayout;
