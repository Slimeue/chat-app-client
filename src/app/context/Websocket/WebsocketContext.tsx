import { createContext } from "react";
import { io, Socket } from "socket.io-client";
import { socket } from "./Socket";

export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;
