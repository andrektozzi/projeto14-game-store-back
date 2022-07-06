import { CreateUser, LoginUser } from "../controllers/authControllers.js";
import { ValidateSignUp, ValidateLogin } from "../middlewares/schemaMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/signup", ValidateSignUp, CreateUser);
router.post("/login", ValidateLogin, LoginUser);

export default router;