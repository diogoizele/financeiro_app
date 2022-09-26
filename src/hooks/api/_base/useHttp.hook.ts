import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from "axios";
import { useMemo } from "react";
import { useUser } from "../../../context";

interface useHttpParams extends AxiosRequestConfig {}

const UNAUTHORIZED = 401;

export function useHttp(config: useHttpParams) {
  const httpInstance = axios.create(config);
  const { setUser } = useUser();

  function errorHandler(error: AxiosError) {
    if (error.response?.status === UNAUTHORIZED) {
      setUser(null);
    }

    throw error;
  }

  async function get(url: string, config?: useHttpParams) {
    try {
      return await httpInstance.get(url, config);
    } catch (error: any) {
      errorHandler(error);
    }
  }

  async function post(url: string, data?: any, config?: useHttpParams) {
    try {
      return await httpInstance.post(url, data, config);
    } catch (error: any) {
      errorHandler(error);
    }
  }

  return useMemo(() => ({ get, post }), []);
}
