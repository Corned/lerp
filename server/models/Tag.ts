import mongoose, { Document, Schema, Model, Types } from "mongoose"
import { IWorkspace } from "./Workspace"

interface ITag extends Document {
  name: string
  color: string
}

const tagSchema: Schema<ITag> = new Schema<ITag>(
  {
    name: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

const User: Model<ITag> = mongoose.model<ITag>("Tag", tagSchema)

export { ITag, User }
