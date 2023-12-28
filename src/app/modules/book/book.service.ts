import { IBook } from "./book.interface";
import { Book } from "./book.model";

const insertIntoDB = async (data: any): Promise<IBook> => {
  const user = new Book(data);
  await user.save();
  return user;
};

const getAllFromDB = async (): Promise<IBook[]> => {
  return Book.find().sort({ createdAt: -1 });
};
const getByIdFromDB = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const Bookservice = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
