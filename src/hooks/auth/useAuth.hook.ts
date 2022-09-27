import { useCallback, useMemo } from "react";
import { User } from "../../@types/user.type";

import { useUser } from "../../context";
import { useHttp } from "../api/_base/useHttp.hook";

type LoginParams = {
  username: string;
  password: string;
};

export function useAuth() {
  const instance = useHttp();
  const { user, setUser } = useUser();

  const login = useCallback(async (payload: LoginParams) => {
    try {
      const response = await instance.post<User>("/auth/login", null, {
        auth: payload,
      });

      setUser(response!.data);
    } catch (error) {
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    await instance.post("/logout");

    localStorage.removeItem(import.meta.env.VITE_LOCAL_STORAGE_USER_KEY);
    setUser(null);
  }, []);

  return useMemo(
    () => ({
      isAuth: Object.keys(user ?? {}).length > 0,
      login,
      logout,
    }),
    [user]
  );
}
