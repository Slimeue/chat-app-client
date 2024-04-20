import { Box, Button, Center, Group } from "@mantine/core";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/auth-context";
import { ISignInFormInput } from "./components/Chat/helper";
import { useForm } from "@mantine/form";
import AppSignIn from "./components/Auth/AppSignIn";
import Header from "./components/landing-page/components/Header";

export default function Home() {
  return (
    <Header />
  );
}
