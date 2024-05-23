import mongoose, { Document, Schema, Model } from "mongoose"

import { IWorkspace } from "./Workspace"

interface IUser extends Document {
  name: string
  password: string
  avatar?: string
  ownedWorkspaces: IWorkspace[]
  memberWorkspaces: IWorkspace[]
}

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    avatar: { type: String, default: null },
    ownedWorkspaces: [{ type: Schema.ObjectId, ref: "Workspace" }],
    memberWorkspaces: [{ type: Schema.ObjectId, ref: "Workspace" }],
  },
  {
    timestamps: true,
  }
)

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema)

export { IUser, User }
