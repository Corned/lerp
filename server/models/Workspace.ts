import mongoose, { Document, Schema, Model, Types } from "mongoose"
import { IUser } from "./User"
import { ITag } from "./Tag"
import { ITask } from "./Task"

interface IWorkspace extends Document {
  name: string
  owner: Types.ObjectId | IUser
  members: (Types.ObjectId | IUser)[]
  tasks: (Types.ObjectId | ITask)[]
  tags: (Types.ObjectId | ITag)[]
  categories: ICategory[]
}

interface ICategory {
  name: string
  position: number
}

const workspaceSchema: Schema<IWorkspace> = new Schema<IWorkspace>(
  {
    name: { type: String, trim: true },
    owner: { type: Schema.ObjectId, ref: "User", required: true },
    members: [{ type: Schema.ObjectId, ref: "User" }],
    tasks: [{ type: Schema.ObjectId, ref: "Task" }],
    tags: [{ type: Schema.ObjectId, ref: "Tag" }],
    categories: [{} as ICategory],
  },
  {
    timestamps: true,
  }
)

const Workspace: Model<IWorkspace> = mongoose.model<IWorkspace>(
  "Workspace",
  workspaceSchema
)

export { IWorkspace, ICategory, Workspace }
