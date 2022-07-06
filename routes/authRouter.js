import { Router } from "express";
import { CreateUser, LoginUser } from "../controllers/authControllers";
import { ValidadeSignUp, ValidateLogin } from "../middlewares/schemaMiddleware";

const router = Router();

router.post("/signup", ValidadeSignUp, CreateUser);
router.post("/login", ValidateLogin, LoginUser);

export default router;