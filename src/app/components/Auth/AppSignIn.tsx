"use client";
import {
  AuthContext,
  useAuthContext,
} from "@/app/context/AuthContext/auth-context";
import { useForm } from "@mantine/form";
import { ISignInFormInput } from "../Chat/helper";
import { Box, Button, Center, Group, TextInput } from "@mantine/core";
import Image from "next/image";
import { getStatus } from "@/app/utils/helper";
import { useEffect } from "react";
import { STATUS } from "@/app/utils/types";
import { redirect } from "next/navigation";
const AppSignIn = () => {
  const { signIn } = useAuthContext();
  useEffect(() => {
    const status = getStatus();
    if (status === STATUS.AUTHENTICATED) {
      redirect("/pages");
    }
  });
  const form = useForm<ISignInFormInput>({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { onSubmit } = form;
  const handlSubmit = async (values: ISignInFormInput) => {
    signIn(form);
  };

  return (
    <>
      <Center className="flex h-screen w-screen">
        <Group justify="space-between">
          <Box>
            <Image
              alt=""
              src="/assets/undraw_Work_chat_re_qes4.png"
              width={500}
              height={500}
            />
          </Box>
          <Box>
            <form onSubmit={onSubmit(handlSubmit)}>
              <Box>
                <TextInput
                  className="m-5"
                  type="text"
                  placeholder="email"
                  id="email"
                  name="email"
                  {...form.getInputProps("email")}
                />
              </Box>
              <Box>
                <TextInput
                  className="m-5"
                  type="password"
                  placeholder="password"
                  id="password"
                  name="password"
                  {...form.getInputProps("password")}
                />
              </Box>
              <Box>
                <Button className="m-5" type="submit">
                  Sign In
                </Button>
                <Button className="m-5">Sign Up</Button>
              </Box>
            </form>
          </Box>
        </Group>
      </Center>
    </>
  );
};

export default AppSignIn;
