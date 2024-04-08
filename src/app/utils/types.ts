import { User } from "../../../lib/types/apolloComponents";

export interface LoginResponse {
  token: string;
  user: User;
}

export enum STATUS {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
}
