import { NavLink, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface IProps {
  link: string;
  name: string;
}
const NavBarLink: FC<IProps> = (props) => {
  const router = useRouter();
  const { link, name } = props;
  return (
    <UnstyledButton onClick={() => router.push(link)}>{name}</UnstyledButton>
  );
};

export default NavBarLink;
