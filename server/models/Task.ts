import mongoose, { Document, Schema, Model, Types } from "mongoose"
import { IWorkspace } from "./Workspace"
import { ITag } from "./Tag"
import { IUser } from "./User"

interface ITask extends Document {
  workspace: Types.ObjectId | IWorkspace
  category: number
  tags: ITag[]
  body: string
  position: number
  date: Date
  assignedUsers: IUser[]
}

const taskSchema: Schema<ITask> = new Schema<ITask>(
  {
    workspace: { type: Schema.ObjectId, ref: "Workspace", required: true },
    category: { type: Number, required: true },
    tags: [{ type: Schema.ObjectId, ref: "Tag" }],
    body: { type: String },
    position: { type: Number },
    date: { type: Date },
    assignedUsers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
)

const Task: Model<ITask> = mongoose.model<ITask>("Task", taskSchema)

export { ITask, Task }
