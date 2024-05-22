import express from "express"
import dotenv from "dotenv"

import { IUser } from "./types"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)

  const user: IUser = {
    name: "Corned",
    password: "mombububb",
  }

  console.log(user)
})
