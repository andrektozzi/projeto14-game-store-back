import { Router } from "express";
import { CreateUser } from "../controllers/authControllers";
import { ValidadeSignUp } from "../middlewares/schemaMiddleware";

const router = Router();

router.post("/signup", ValidadeSignUp, CreateUser);

export default router;