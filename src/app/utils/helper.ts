import { FC } from "react";
import { User } from "../../../lib/types/apolloComponents";
import { STATUS } from "./types";
import { Secret, verify } from "jsonwebtoken";
import { JWT_SECRET } from "./next.config";

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

//#TODO - Implement Token expiry checking
export const getToken = () => {
  try {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        const verified = verify(token, JWT_SECRET as Secret);
        return true;
      }
      return false;
    }
  } catch (e) {
    return false;
  }
  return undefined;
};
