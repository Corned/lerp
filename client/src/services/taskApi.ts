import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/tasks/" }),
  endpoints: (builder) => ({
    getTasksByWorkspaceId: builder.query({
      query: (id) => `?workspace=${id}`,
    }),

    updateTask: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
})

export const { useGetTasksByWorkspaceIdQuery, useUpdateTaskMutation } = taskApi
