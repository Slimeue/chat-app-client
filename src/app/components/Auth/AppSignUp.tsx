import React from 'react';
import { Box, Button, Container, Divider, Paper, PasswordInput, Text, TextInput } from "@mantine/core";
import Header from './components/Header';
import Link from 'next/link';

const AuthSignUp = () => {
    return (
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
                            <Text>JOIN US</Text>
                        </Box>
                        <form className='lg:w-[500px] md:w-[500px] w-[300px]'
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
                                style={{ marginBottom: 10, width: '100%' }} />
                            <TextInput
                                id="name"
                                label="Name"
                                placeholder="Name"
                                style={{ marginBottom: 10, width: '100%' }} />
                            <PasswordInput
                                id="password"
                                label="Password"
                                placeholder="Password"
                                style={{ marginBottom: 20, width: '100%', }} />
                            <Button
                                id="signup"
                                variant="filled"
                                color="black"
                                fullWidth
                                style={{ marginTop: 10, borderRadius: 20 }}
                                type="submit"
                            >
                                CREATE
                            </Button>
                            <Link href={'/app/signin'} style={{ textDecoration: 'none', width: '100%' }}>
                                <Button
                                    id="signin"
                                    variant='outline'
                                    color="black"
                                    fullWidth
                                    style={{ marginTop: 10, borderRadius: 20 }}
                                    type="submit"
                                >
                                    SIGN IN YOUR ACCOUNT
                                </Button>
                            </Link>
                            <Divider
                                label="Or continue with email"
                                labelPosition="center"
                                my="lg"
                            />

                        </form>
                    </Paper>
                </Box>
            </Container></>
    )
}

export default AuthSignUp;
