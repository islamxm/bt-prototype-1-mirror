import { z } from "zod";
import { CourseSchema, GetCoursesByCategoryIdSuccessResponseSchema } from "./contract";
import { DefaultResponseErrorData, Response } from "@/shared/types";

export type CourseDto = z.infer<typeof CourseSchema>;
export type Course = Omit<CourseDto, "parent_id"> & {
  parentId?: number;
};

export type GetCoursesByCategoryIdResponse = Response<
  z.infer<typeof GetCoursesByCategoryIdSuccessResponseSchema>,
  DefaultResponseErrorData
>