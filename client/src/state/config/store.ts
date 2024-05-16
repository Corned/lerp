import { configureStore } from "@reduxjs/toolkit"

import userSlice from "@/state/slice/userSlice"
import { api } from "@/services/api"

export const store = configureStore({
  reducer: {
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
})
