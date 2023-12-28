import { Request, Response } from "express";
import { Mainservice } from "./main.service";

import catchAsync from "../../shared/catchAsync";
import httpStatus from "http-status";
import { IMain } from "./main.interface";
import sendReponse from "../../shared/sendResponse";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await Mainservice.insertIntoDB(payload);

  sendReponse<IMain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Main page data created successfully!",
    data: result,
  });
});

const getAllFromDB = async (req: Request, res: Response) => {
  const result = await Mainservice.getAllFromDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Main page data retrieved successfully!",
    data: result,
  });
};

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Mainservice.getByIdFromDB(id);
  sendReponse<IMain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Main page data retrieved successfully !",
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await Mainservice.updateOneInDB(id, updatedData);
  sendReponse<IMain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Main page data updated successfully !",
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Mainservice.deleteByIdFromDB(id);
  sendReponse<IMain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Main page data deleted successfully !",
    data: result,
  });
});

export const JoinController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
}
