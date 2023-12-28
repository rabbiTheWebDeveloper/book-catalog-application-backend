import { Router } from "express";
import { JoinController } from "./join.controller";
import { auth } from "../../middleware/AuthVerifyMiddleware";
const router: Router = Router();

router.get("/", JoinController.getAllFromDB);
router.get("/:id", JoinController.getByIdFromDB);
router.post("/", auth, JoinController.insertIntoDB);
router.patch("/:id", auth, JoinController.updateOneInDB);
router.delete("/:id", auth, JoinController.deleteByIdFromDB);

export const joinRoutes = router;
