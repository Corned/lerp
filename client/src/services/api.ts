import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasksByWorkspaceId: builder.query({
      query: (id) => `/tasks/?workspace=${id}`,
      providesTags: ["Task"],
    }),

    getWorkspaceById: builder.query({
      query: (id) => `/workspaces/${id}?_embed=tasks`,
      providesTags: (result, error, args) => {
        if (result) {
          return [
            ...result.tasks.map(({ id }) => ({ type: "Task", id })),
            { type: "Workspace", id: "WORKSPACE" },
            { type: "Task", id: "LIST" },
          ]
        }

        return ["Workspace"]
      },
    }),

    createTask: builder.mutation({
      query: ({ payload }) => ({
        url: `/tasks`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),

    updateTask: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/tasks/${id || ""}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
    }),
  }),
})

export const {
  useGetTasksByWorkspaceIdQuery,
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useGetWorkspaceByIdQuery,
} = api
