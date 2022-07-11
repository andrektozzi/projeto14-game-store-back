import { Router } from "express";
import { AddProductsCheckout, RenderProductsCheckout, DeleteProductsCheckout } from "../controllers/checkoutControllers.js";
import { TokenMiddleware } from "../middlewares/tokenMiddleware.js"

const router = Router();

router.get("/checkout", TokenMiddleware, RenderProductsCheckout);
router.post("/checkout", TokenMiddleware, AddProductsCheckout);
router.delete("/checkout", TokenMiddleware, DeleteProductsCheckout);


export default router;