import { Request, Response } from "express";
import { OfferService } from "./offer.service";

import catchAsync from "../../shared/catchAsync";
import httpStatus from "http-status";
import { IOffer } from "./offer.interface";
import sendReponse from "../../shared/sendResponse";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await OfferService.insertIntoDB(payload);

  sendReponse<IOffer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer created successfully!",
    data: result,
  });
});

const getAllFromDB = async (req: Request, res: Response) => {
  const result = await OfferService.getAllFromDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer retrieved successfully!",
    data: result,
  });
};

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await OfferService.getByIdFromDB(id);
  sendReponse<IOffer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer retrieved successfully !",
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await OfferService.updateOneInDB(id, updatedData);
  sendReponse<IOffer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer updated successfully !",
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await OfferService.deleteByIdFromDB(id);
  sendReponse<IOffer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer deleted successfully !",
    data: result,
  });
});

export const OfferController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
}
