import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(
    ApiRoutes.GET_INGREDIENTS
  );

  return data;
};
