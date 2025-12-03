import { api } from "@/shared/api";
import { parseQueryParams } from "@/shared/lib";
import { GetCoursesByCategoryIdSuccessResponseSchema } from "./contract";
import { courseDtoMap } from "./lib";
import {z} from "zod";

type GetCoursesByCategoryIdInputType = {
  categoryId?: string;
  cursor?: number;
};

export const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCoursesByCategoryId: builder.infiniteQuery<
      z.infer<typeof GetCoursesByCategoryIdSuccessResponseSchema>,
      GetCoursesByCategoryIdInputType,
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 0,
        getNextPageParam(lastPage) {
          return lastPage?.cursor ? Number(lastPage.cursor) : undefined;
        },
      },
      queryFn: async (
        { queryArg, pageParam = 0 },
        _api,
        _opts,
        fetchWithBQ
      ) => {
        const result = await fetchWithBQ({
          url: `home/category_courses?${parseQueryParams({
            ...queryArg,
            cursor: pageParam,
          })}`,
        });
        if (result.error) {
          return { error: result.error };
        }
        try {
          const validated = GetCoursesByCategoryIdSuccessResponseSchema.parse(
            result.data
          );
          return {
            data: {
              ...validated,
              courses: validated.courses.map(courseDtoMap),
            },
          };
        } catch (err) {
          console.log("VALIDATE ERROR", err);
          return {
            error: {
              status: 500,
              data: `Invalid response format: ${err}`,
            },
          };
        }
      },
    }),
  }),
});
