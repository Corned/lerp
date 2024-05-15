import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const workspaceApi = createApi({
  reducerPath: "workspaceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/workspaces/" }),
  endpoints: (builder) => ({
    getWorkspaceById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
})

export const { useGetWorkspaceByIdQuery } = workspaceApi