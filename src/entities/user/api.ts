import { api } from "@/shared/api";
import { UserHomeDataSuccessResponseSchema } from "./contracts";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomeUserData: builder.query({
      query: () => ({
        url: "home/private",
      }),
      transformResponse: (res) => {
        try {
          return UserHomeDataSuccessResponseSchema.parse(res)
        } catch(err) {
          console.log("VALIDATE ERROR", err)
        }
      },
    }),
  }),
});
