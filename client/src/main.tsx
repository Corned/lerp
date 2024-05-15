import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"

import Workspace from "@/routes/Workspace.tsx"
import Index from "@/routes/Index.tsx"
import Profile from "@/routes/Profile.tsx"
import { store } from "@/state/config/store.ts"
import App from "@/App.tsx"

import "@/index.css"
import "@/globals.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "workspace",
        element: <Workspace />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
