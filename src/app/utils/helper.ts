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
