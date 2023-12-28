import { ILead } from "./lead.interface";
import { Leads } from "./lead.model";


const getAllFromDB = async (): Promise<ILead[]> => {
  return Leads.find().sort({ createdAt: -1 });
};

const getRecentFromDB = async (): Promise<ILead[]> => {
  return Leads.find().sort({ createdAt: -1 }).limit(6);
};
const getByIdFromDB = async (id: string): Promise<ILead| null> => {
  const result = await Leads.findById(id);
  return result
};

const insertIntoDB = async (data: any): Promise<ILead> => {
  const user = new Leads(data);
  await user.save();
  return user;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<ILead>
): Promise<ILead | null> => {
  const result = await Leads.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<ILead | null> => {
  const result = await Leads.findByIdAndDelete(id);
  return result;
};

export const Leadservice = {
  insertIntoDB,
  getAllFromDB,
  getRecentFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
