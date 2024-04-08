import AppLayout from "@/app/Layouts/AppLayout";
import dynamic from "next/dynamic";

const DynamicPage = dynamic(
  () => import("../../components/Profile/ProfilePage"),
  { ssr: false }
);
const Page = () => {
  return (
    <AppLayout>
      <DynamicPage />
    </AppLayout>
  );
};
export default Page;
