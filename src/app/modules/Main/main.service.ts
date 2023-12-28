import { IMain } from "./main.interface";
import { Mains } from "./main.model";


const getAllFromDB = async (): Promise<IMain[]> => {
  return Mains.find().sort({ createdAt: -1 });
};
const getByIdFromDB = async (id: string): Promise<IMain| null> => {
  const result = await Mains.findById(id);
  return result
};

const insertIntoDB = async (data: any): Promise<IMain> => {
  const user = new Mains(data);
  await user.save();
  return user;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<IMain>
): Promise<IMain | null> => {
  const result = await Mains.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<IMain | null> => {
  const result = await Mains.findByIdAndDelete(id);
  return result;
};

export const Mainservice = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
