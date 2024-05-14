import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "./globals.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Workspace from "./routes/Workspace.tsx"
import Index from "./routes/Index.tsx"
import Profile from "./routes/Profile.tsx"

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
    <RouterProvider router={router} />
  </React.StrictMode>
)
