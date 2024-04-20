"use client"
import React from 'react';
import {
  AuthContext,
  useAuthContext,
} from "@/app/context/AuthContext/auth-context";
import { useForm } from "@mantine/form";
import { ISignInFormInput } from "../Chat/helper";
import { Box, Button, Container, Divider, Paper, PasswordInput, Text, TextInput } from "@mantine/core";
import Header from './components/Header';
import { getStatus } from "@/app/utils/helper";
import { useEffect } from "react";
import { STATUS } from "@/app/utils/types";
import { redirect } from "next/navigation";
import Link from 'next/link';

const AuthSignIn = () => {
  const { signIn } = useAuthContext();
  useEffect(() => {
    const status = getStatus();
    if (status === STATUS.AUTHENTICATED) {
      redirect("/app");
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
  }; return (
    <><Header />
      <Container size="xl" px="xs">
        <Box className='flex justify-center items-center'
          style={{
            minHeight: '80vh'
          }}>

          <Paper withBorder shadow="md" radius="md"
            style={{
              width: 'auto',
              height: 'auto',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <Box style={{ marginBottom: 20 }}>
              <Text>WELCOME BACK</Text>
            </Box>
            <form onSubmit={onSubmit(handlSubmit)}
              className='lg:w-[500px] md:w-[500px] w-[300px]'
              style={{
                padding: 20,
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <TextInput
                id="email"
                label="Email"
                placeholder="Email"
                style={{ marginBottom: 10, width: '100%' }}
                {...form.getInputProps("email")} />

              <PasswordInput
                id="password"
                label="Password"
                placeholder="Password"
                style={{ marginBottom: 20, width: '100%', }}
                {...form.getInputProps("password")} />
              
                <Button
                  id="signin"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 10, borderRadius: 20 }}
                  type="submit"
                >
                  LOGIN
                </Button>
            
             

            </form>
            <Link href={'/app/signup'} style={{ textDecoration: 'none', width: '100%' }}>
                <Button
                  id="signup"
                  variant='outline'
  
                  fullWidth
                  style={{ marginTop: 10, borderRadius: 20 }}
                  type="submit"

                >
                  CREATE NEW ACCOUNT
                </Button>
              </Link>
              <Divider
                label="Or continue with email"
                labelPosition="center"
                my="lg"
              />
          </Paper>
        </Box>
      </Container></>
  )
}

export default AuthSignIn;
