import { Request, RequestHandler, Response } from "express";
import { Bookservice } from "./book.service";
import catchAsync from "../../shared/catchAsync";
import sendReponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { IBook } from "./book.interface";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const user = req.headers.id;
  payload.userId = user;
  const result = await Bookservice.insertIntoDB(payload);
  sendReponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully!",
    data: result,
  });
});
const getAllFromDB = async (req: Request, res: Response) => {
  const user = req.headers.id;
  const result = await Bookservice.getAllFromDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully!",
    data: result,
  });
};

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const user = req.headers.id;
  const id = req.params.id;
  const result = await Bookservice.getByIdFromDB(id);
  sendReponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully !",
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await Bookservice.updateOneInDB(id, updatedData);
  sendReponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join updated successfully !",
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Bookservice.deleteByIdFromDB(id);
  sendReponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join deleted successfully !",
    data: result,
  });
});

export const BooksController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  // updateOneInDB,
  // deleteByIdFromDB,
};
