import mongoose, { Document, Schema, Model } from "mongoose"

interface IUser extends Document {
  name: string
  password: string
  avatar?: string
}

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    avatar: { type: String, default: null },
  },
  {
    timestamps: true,
  }
)

const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema)

export default UserModel
