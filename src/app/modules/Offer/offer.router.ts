import { Router } from "express";
import { OfferController } from "./offer.controller";
import { auth } from "../../middleware/AuthVerifyMiddleware";
const router: Router = Router();

router.get("/", OfferController.getAllFromDB);
router.get("/:id", OfferController.getByIdFromDB);
router.post("/", auth, OfferController.insertIntoDB);
router.patch("/:id", auth, OfferController.updateOneInDB);
router.delete("/:id", auth, OfferController.deleteByIdFromDB);

export  const offerRoutes = router
