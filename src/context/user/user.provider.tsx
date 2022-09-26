import { useState } from "react";

import { UserContext } from "./user.context";

import type { User } from "../../@types/user";

interface UserProviderProps {
  children: React.ReactNode;
}

const strigifyUser = localStorage.getItem(
  import.meta.env.VITE_LOCAL_STORAGE_USER_KEY
);

const storagedUser = JSON.parse(strigifyUser ?? "{}");

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, _setUser] = useState<User | null>(storagedUser);

  function setUser(user: User | null) {
    _setUser(user);

    localStorage.setItem(
      import.meta.env.VITE_LOCAL_STORAGE_USER_KEY,
      JSON.stringify(user)
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
