import { configureStore } from "@reduxjs/toolkit"

import userSlice from "@/state/slice/userSlice"
import { taskApi } from "@/services/taskApi"
import { workspaceApi } from "@/services/workspaceApi"

export const store = configureStore({
  reducer: {
    user: userSlice,
    [taskApi.reducerPath]: taskApi.reducer,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
})
