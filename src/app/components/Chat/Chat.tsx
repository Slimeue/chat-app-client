"use client";

import { useEffect, useState } from "react";
import { ConnectionManager } from "./ConnectionManager";
import { ConnectionState } from "./ConnectionState";
import { Events } from "./Events";
import { MyForm } from "./MyForm";
import { socket } from "@/app/context/Websocket/Socket";
import {
  useCreateMessageMutation,
  useMessageCreatedSubscription,
} from "../../../../lib/types/apolloComponents";
import { useForm } from "@mantine/form";
import { ISignInFormInput } from "./helper";

export const Chat = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [events, setEvents] = useState([]);
  const { data, loading } = useMessageCreatedSubscription();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected");
    });
    socket.on("message", (data) => {
      console.log(data);
      setEvents(data);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  const handleSubmit = async (values: ISignInFormInput) => {
    const res = await fetch("http://localhost:6060/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data?.jwtToken);
      console.log(data);
    }
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <input
          placeholder="email"
          type="text"
          name="email"
          id="email"
          {...form.getInputProps("email")}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
          {...form.getInputProps("password")}
        />
        <button type="submit">Login</button>
      </form>
      <ConnectionManager />
      <Events />
      <MyForm />
    </>
  );
};
