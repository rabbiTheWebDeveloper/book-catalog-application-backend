import { Router } from "express";
import { login, registration, userUpdate } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";

const router:Router = Router();

router.post("/registration" ,
validateRequest(UserValidation.createUserZodSchema),
registration);
router.post("/login",login);
router.post("/user-update/:id",userUpdate);

export default  router;