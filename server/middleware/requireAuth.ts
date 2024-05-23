import { RequestHandler } from "express"

const requireAuth: RequestHandler = (req, res, next) => {
  if (!res.locals.userId) {
    return res.status(401).json({ error: "Not authenticated" })
  }

  next()
}

export default requireAuth
