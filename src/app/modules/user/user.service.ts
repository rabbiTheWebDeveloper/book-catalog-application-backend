import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user)
  return createUser
}

const loginFromDB = async (reqBody: IUser): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = await User.aggregate([
    { $match: reqBody },
    { $project: { _id: 0, email: 1, username: 1, phone: 1, image: 1 , role:1} },
  ])
  return user
}
export default {
  createUser,
  loginFromDB,
}
