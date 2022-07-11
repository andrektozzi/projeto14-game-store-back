import { Router } from "express";
import { TokenMiddleware } from "../middlewares/tokenMiddleware.js"
import { AddPurchase, RenderPurchases } from "../controllers/purchasesControllers.js";

const router = Router();

router.get("/purchases", TokenMiddleware, RenderPurchases);
router.post("/purchases", TokenMiddleware, AddPurchase);


export default router;