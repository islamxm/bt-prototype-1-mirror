import { z } from "zod";
import { CategorySchema, GetCategoriesSuccesssResponseSchema } from "./contracts";
import { DefaultResponseErrorData, Response } from "@/shared/types";

export type CategoryDto = z.infer<typeof CategorySchema>;
export type Category = CategoryDto;

export type GetCategoriesResponse = Response<
  z.infer<typeof GetCategoriesSuccesssResponseSchema>,
  DefaultResponseErrorData
>
