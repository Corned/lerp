import { Router, Request, Response } from "express"
import { Workspace, IWorkspace } from "../models/Workspace"
import { User, IUser } from "../models/User"
import argon2 from "argon2"
import { Nullable } from "../types"

const router = Router()

interface IAccountCreationBody {
  username: string
  password: string
  passwordConfirm: string
}

router.get("/", (req: Request, res: Response) => {})

router.post("/", async (req: Request, res: Response) => {
  const { username, password, passwordConfirm }: IAccountCreationBody = req.body

  // Check for username uniqueness
  try {
    const existingUser: Nullable<IUser> = await User.findOne({
      name: username,
    })

    if (existingUser) {
      return res.status(409).json({
        error: "Username already taken",
      })
    }
  } catch (err) {
    return res.status(500).json({
      error: "Failed to check username uniqueness",
    })
  }

  // Check for password match
  if (password === passwordConfirm) {
    return res.status(400).json({
      error: "Passwords don't match",
    })
  }

  // Create user!
  try {
    const passwordHash = await argon2.hash(password, {
      secret: process.env.PASSWORD_PEPPER,
    })
    const newUser = new User({
      name: username,
      password: passwordHash,
    })
  } catch (e) {}
})

export default router
