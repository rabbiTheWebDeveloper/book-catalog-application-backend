import express from "express";
import { BooksController } from "./book.controller";
import { auth } from "../../middleware/AuthVerifyMiddleware";

const router = express.Router();
router.get("/", BooksController.getAllFromDB);
router.get("/:id", BooksController.getByIdFromDB);
router.post("/", auth, BooksController.insertIntoDB);

export const BookesRoutes = router;
