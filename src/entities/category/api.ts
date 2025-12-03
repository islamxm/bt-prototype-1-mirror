import { api } from "@/shared/api";
import { GetCategoriesSuccesssResponseSchema } from "./contracts";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/home/categories",
      }),
      transformResponse: (res) => {
        try {
          return GetCategoriesSuccesssResponseSchema.parse(res)
        } catch(err) {
          console.log("VALIDATE ERROR", err)
        }
      }
    })
  })
})