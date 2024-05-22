import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
