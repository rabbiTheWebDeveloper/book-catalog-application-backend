import { Router } from "express";
import { LeadController } from "./lead.controller";
import { auth } from "../../middleware/AuthVerifyMiddleware";
const router: Router = Router();

router.get("/", LeadController.getAllFromDB);
router.get("/recent", LeadController.getRecentFromDB);
router.get("/:id", LeadController.getByIdFromDB);
router.post("/", auth, LeadController.insertIntoDB);
router.patch("/:id", auth, LeadController.updateOneInDB);
router.delete("/:id", auth, LeadController.deleteByIdFromDB);

export const leadRoutes = router;
