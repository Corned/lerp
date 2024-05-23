import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import morgan from "morgan"

import userRouter from "./routers/user"
import taskRouter from "./routers/task"
import workspaceRouter from "./routers/workspace"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan("tiny"))

app.use("/user", userRouter)
app.use("/task", taskRouter)
app.use("/workspace", workspaceRouter)

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!")
})

mongoose.connect(process.env.DB_URL || "").then(() => {
  console.log("Connected to mongodb!")

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
  })
})
