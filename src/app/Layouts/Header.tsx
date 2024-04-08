import { Box, Button, UnstyledButton } from "@mantine/core";
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from "../context/AuthContext/auth-context";
const Header = () => {
  const { signOut } = useAuthContext();

  return (
    <>
      <header>
        <Box className="flex flex-row w-screen justify-between items-center p-10">
          <div>
            <h1>Header</h1>
          </div>
          <div>
            <UnstyledButton>
              <CiLogout onClick={() => signOut()} className="size-10" />
            </UnstyledButton>
          </div>
        </Box>
      </header>
    </>
  );
};

export default Header;
