import { Router, Request, Response } from "express"
import requireAuth from "../middleware/requireAuth"
import { IWorkspace, Workspace } from "../models/Workspace"
import { User } from "../models/User"

const router = Router()

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const userId: string = res.locals.userId

  try {
    const workspaces: IWorkspace[] = await Workspace.find({ owner: userId })
    res.status(200).json(workspaces)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch workspaces" })
  }
})

router.get("/:id", requireAuth, async (req: Request, res: Response) => {
  res.status(200).send("OK!")
})

router.post("/", requireAuth, async (req: Request, res: Response) => {
  const userId: string = res.locals.userId

  try {
    const newWorkspace: IWorkspace = new Workspace({
      name: "My Workspace",
      owner: userId,
      members: [userId],
      tasks: [],
      tags: [],
      categories: [],
    })

    await newWorkspace.save()
    await User.findByIdAndUpdate(userId, {
      $push: { ownedWorkspaces: newWorkspace._id },
    })

    res.status(201).json(newWorkspace)
  } catch (err) {
    res.status(500).json({ error: "Failed to create workspace" })
  }
})

export default router
