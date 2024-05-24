import mongoose, { Document, Schema, Model, Types } from "mongoose"
import { IWorkspace } from "./Workspace"
import { IUser } from "./User"

interface IInvite extends Document {
  from: IUser
  to: IUser
  workspace: IWorkspace
}

const inviteSchema: Schema<IInvite> = new Schema<IInvite>(
  {
    from: { type: Schema.ObjectId, ref: "User", required: true },
    to: { type: Schema.ObjectId, ref: "User", required: true },
    workspace: { type: Schema.ObjectId, ref: "Workspace", required: true },
  },
  {
    timestamps: true,
  }
)

const Invite: Model<IInvite> = mongoose.model<IInvite>("Invite", inviteSchema)

export { IInvite, Invite }
