import { Request, Response } from "express";
import { Joinservice } from "./join.service";

import catchAsync from "../../shared/catchAsync";
import httpStatus from "http-status";
import { IJoin } from "./join.interface";
import sendReponse from "../../shared/sendResponse";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await Joinservice.insertIntoDB(payload);
  sendReponse<IJoin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join created successfully!",
    data: result,
  });
});

const getAllFromDB = async (req: Request, res: Response) => {
  const result = await Joinservice.getAllFromDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join retrieved successfully!",
    data: result,
  });
};

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Joinservice.getByIdFromDB(id);
  sendReponse<IJoin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join retrieved successfully !",
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await Joinservice.updateOneInDB(id, updatedData);
  sendReponse<IJoin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join updated successfully !",
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Joinservice.deleteByIdFromDB(id);
  sendReponse<IJoin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Join deleted successfully !",
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
