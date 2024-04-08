import AppLayout from "@/app/Layouts/AppLayout";
import dynamic from "next/dynamic";

const PageDynamic = dynamic(
  () => import("../../components/Rooms/RoomsPage"),
  { ssr: false }
);

const Page = () => {
  return (
    <AppLayout>
      <PageDynamic />
    </AppLayout>
  );
};

export default Page;
