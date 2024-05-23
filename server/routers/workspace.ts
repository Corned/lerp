import { Router, Request, Response } from "express"
import requireAuth from "../middleware/requireAuth"

const router = Router()

router.get("/", requireAuth, (req: Request, res: Response) => {
  const userId: string = res.locals.userId
})

export default router
