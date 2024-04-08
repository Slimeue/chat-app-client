import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../../../../lib/types/apolloComponents";
import { UseFormReturnType } from "@mantine/form";
import { ISignInFormInput } from "@/app/components/Chat/helper";
import { useRouter } from "next/navigation";
import { LoginResponse, STATUS } from "@/app/utils/types";

interface AuthContextType {
  status: STATUS;
  user: User | null;
  setStatus: Dispatch<SetStateAction<STATUS>>;
  setUser: Dispatch<SetStateAction<User | null>>;
  signIn: (form: UseFormReturnType<ISignInFormInput>) => void;
  signOut: () => void;
}

const AuthContextDefaultValue: AuthContextType = {
  status: STATUS.UNAUTHENTICATED,
  user: null,
  setStatus: () => {},
  setUser: () => {},
  signIn: (form) => {},
  signOut: () => {},
};
export const AuthContext = createContext<AuthContextType>(
  AuthContextDefaultValue
);

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) throw new Error("Auth Context must not be null");

  return authContext;
};

type IProps = {
  children: React.ReactNode;
};

const AuthContextProvider: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const [status, setStatus] = useState(STATUS.UNAUTHENTICATED);
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (form: UseFormReturnType<ISignInFormInput>) => {
    const { values, reset } = form;
    const body = JSON.stringify(values);
    console.log(body);

    const res = await fetch("http://localhost:6060/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = (await res.json()) as LoginResponse;
    if (data.user) {
      setUser(data.user);
      setStatus(STATUS.AUTHENTICATED);
      localStorage.setItem("token", data.token);
      localStorage.setItem("status", STATUS.AUTHENTICATED);
      router.push("/pages");
    }
  };

  const signOut = () => {
    setUser(null);
    setStatus(STATUS.UNAUTHENTICATED);
    localStorage.removeItem("token");
    localStorage.setItem("status", STATUS.UNAUTHENTICATED);
    router.push("/");
  };

  const ctx: AuthContextType = {
    status,
    user,
    setStatus,
    setUser,
    signIn,
    signOut,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
