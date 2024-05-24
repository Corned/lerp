import express, { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import argon2 from "argon2"
import { User, IUser } from "../models/User"

const router = express.Router()

type Nullable<T> = T | null

interface ICredentials {
  username: string
  password: string
}

// Check if user is already authenticated
router.post("/auth", async (req: Request, res: Response) => {
  const userId: String = res.locals.userId

  if (!userId) {
    return res.status(401).json({ error: "User is not authenticated" })
  }

  try {
    const user: Nullable<IUser> = await User.findById(userId)
    if (!user) {
      return res
        .status(500)
        .json({ error: "You're authenticated, but user doesn't exist" })
    }

    const userObject = user.toObject()
    delete userObject.password

    res.status(200).json({ user: userObject })
  } catch (error) {
    res.status(500).json({ error: "Something went wrong..." })
  }
})

// Clear auth cookie
router.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("auth")
  res.status(200).send()
})

// Login with username and password
router.post("/login", async (req: Request, res: Response) => {
  const { username, password }: ICredentials = req.body

  try {
    const user: Nullable<IUser> = await User.findOne({ username }).select(
      "username password"
    )

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" })
    }

    const passwordHash = user.password
    const isPasswordCorrect: boolean = await argon2.verify(
      passwordHash,
      password
    )

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid username or password" })
    }

    const token = jwt.sign(
      { username: user.name, id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    )

    res.cookie("auth", `Bearer ${token}`, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      maxAge: 2 ** 32, // no
    })

    const userObject = user.toObject()
    delete userObject.password

    return res.status(200).json({ user: userObject })
  } catch (exception) {
    console.log(exception)
    return res.status(500).json({ error: "Something went wrong..." })
  }
})

export default router
