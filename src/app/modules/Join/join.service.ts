import { IJoin } from "./join.interface";
import { Joins } from "./join.model";
import { DeleteResult } from "mongodb";

const getAllFromDB = async (): Promise<IJoin[]> => {
  return Joins.find().sort({ createdAt: -1 });
};
const getByIdFromDB = async (id: string): Promise<IJoin| null> => {
  const result = await Joins.findById(id);
  return result
};

const insertIntoDB = async (data: any): Promise<IJoin> => {
  const user = new Joins(data);
  await user.save();
  return user;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<IJoin>
): Promise<IJoin | null> => {
  const result = await Joins.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<IJoin | null> => {
  const result = await Joins.findByIdAndDelete(id);
  return result;
};

export const Joinservice = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
