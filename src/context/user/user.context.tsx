import { createContext } from "react";
import { User } from "../../@types/user";

export interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps | null>(
  {} as UserContextProps
);
