"use client";
import { FC } from "react";
import {
  WebsocketContext,
  WebsocketProvider,
} from "../context/Websocket/WebsocketContext";
import { socket } from "../context/Websocket/Socket";
import WithApolloProvider from "./ApolloProvider";
import AuthContextProvider from "../context/AuthContext/auth-context";

interface IProps {
  children: React.ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return (
    <AuthContextProvider>
      <WithApolloProvider>
        <WebsocketProvider value={socket}>{children}</WebsocketProvider>
      </WithApolloProvider>
    </AuthContextProvider>
  );
};
