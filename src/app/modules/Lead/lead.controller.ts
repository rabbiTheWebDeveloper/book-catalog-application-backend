import { Request, Response } from "express";
import { Leadservice } from "./lead.service";

import catchAsync from "../../shared/catchAsync";
import httpStatus from "http-status";
import { ILead } from "./lead.interface";
import sendReponse from "../../shared/sendResponse";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await Leadservice.insertIntoDB(payload);

  sendReponse<ILead>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead User created successfully!",
    data: result,
  });
});

const getAllFromDB = async (req: Request, res: Response) => {
  const result = await Leadservice.getAllFromDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead User  retrieved successfully!",
    data: result,
  });
};
const getRecentFromDB = async (req: Request, res: Response) => {
  const result = await Leadservice.getRecentFromDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead User  retrieved successfully!",
    data: result,
  });
};

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Leadservice.getByIdFromDB(id);
  sendReponse<ILead>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead User  retrieved successfully !",
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await Leadservice.updateOneInDB(id, updatedData);
  sendReponse<ILead>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead User  updated successfully !",
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Leadservice.deleteByIdFromDB(id);
  sendReponse<ILead>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead User  deleted successfully !",
    data: result,
  });
});

export const LeadController = {
  insertIntoDB,
  getAllFromDB,
  getRecentFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
}
