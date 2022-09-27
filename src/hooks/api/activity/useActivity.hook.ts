import { useCallback, useMemo } from "react";

import { useHttp } from "../_base/useHttp.hook";

import type {
  Activity,
  ActivityBasicResponse,
  ActivityResponse,
} from "../../../@types/activity.type";
import type { Pageable } from "../../../@types/springPageable.type";
import type { Category } from "../../../@types/category.type";

type ActivityPagePayload = {
  category: Category;
  page?: number;
  size?: number;
};

type CreateActivityPayload = Omit<Activity, "date"> & { date: string };

export function useActivity() {
  const instance = useHttp();

  const createActivity = useCallback(async (payload: CreateActivityPayload) => {
    const response = await instance.post<ActivityBasicResponse>(
      "/activities",
      payload
    );

    return response?.data;
  }, []);

  const getActivityPage = useCallback(
    async ({ category, page, size }: ActivityPagePayload) => {
      const response = await instance.get<Pageable<ActivityResponse>>(
        `/activities?category=${category}&page=${page}&size=${size}&sort=date,desc`
      );

      return response?.data;
    },
    []
  );

  return useMemo(
    () => ({
      createActivity,
      getActivityPage,
    }),
    []
  );
}
