import { IOffer } from "./offer.interface";
import { Offers } from "./offer.model";
import { DeleteResult } from "mongodb";

const getAllFromDB = async (): Promise<IOffer[]> => {
  return Offers.find().sort({ createdAt: -1 });
};
const getByIdFromDB = async (id: string): Promise<IOffer| null> => {
  const result = await Offers.findById(id);
  return result
};

const insertIntoDB = async (data: any): Promise<IOffer> => {
  const user = new Offers(data);
  await user.save();
  return user;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<IOffer>
): Promise<IOffer | null> => {
  const result = await Offers.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<IOffer | null> => {
  const result = await Offers.findByIdAndDelete(id);
  return result;
};

export const OfferService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
