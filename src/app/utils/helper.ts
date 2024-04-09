import { FC } from "react";
import { User } from "../../../lib/types/apolloComponents";
import { STATUS } from "./types";

export const getStatus = () => {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem("status") as STATUS;
    }
  } catch (e) {
    console.error(e);
    return STATUS.UNAUTHENTICATED;
  }
};

export const getAuthUser = (): User | null => {
  try {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      const parsedUser = user ? (JSON.parse(user) as User) : null;
      return parsedUser;
    }
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
