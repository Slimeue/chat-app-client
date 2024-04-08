import dynamic from "next/dynamic";
import AppSignIn from "../components/Auth/AppSignIn";
import AppLayout from "../Layouts/AppLayout";
import AppShellLayout from "../Layouts/AppShell";
import { ReactElement } from "react";

const PageDynamic = dynamic(() => import("../components/Home/HomePage"));
const Page = () => {
  return (
    <AppLayout>
      <PageDynamic />
    </AppLayout>
  );
};

export default Page;
