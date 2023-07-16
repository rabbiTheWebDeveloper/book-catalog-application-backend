import { Schema, Model, model } from 'mongoose'
import { IUser } from './user.interface'

type UserModel = Model<IUser, Record<string, unknown>>
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)
export const User = model<IUser, UserModel>('User', userSchema)
