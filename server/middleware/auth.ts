import jwt from "jsonwebtoken"
import { RequestHandler } from "express"

const isAuthenticated: RequestHandler = (req, res, next) => {
  const { auth } = req.cookies

  // If user doesn't have auth cookie,
  // move to the next middleware.
  if (!auth) {
    return next()
  }

  const authTokenParts = auth.split(" ")
  if (authTokenParts.length !== 2 || authTokenParts[0] !== "Bearer") {
    return next()
  }

  try {
    const token = authTokenParts[1]
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    res.locals.userId = decoded.id
    next()
  } catch (error) {
    // JWT verification fails
    res.clearCookie("auth")
    next()
  }
}

export default isAuthenticated
