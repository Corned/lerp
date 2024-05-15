import { configureStore } from "@reduxjs/toolkit"

import userSlice from "@/state/slice/userSlice"
import { taskApi } from "@/services/taskApi"

export const store = configureStore({
  reducer: {
    user: userSlice,
    [taskApi.reducerPath]: taskApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
})
