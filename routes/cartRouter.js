import { Router } from "express";
import { TokenMiddleware } from "../middlewares/tokenMiddleware.js"
import { AddProductCart, DeleteProductCart, RenderProductsCart } from "../controllers/cartControllers.js";

const router = Router();

router.get("/cart", TokenMiddleware, RenderProductsCart);
router.post("/cart", TokenMiddleware, AddProductCart);
router.delete("/cart/:id", TokenMiddleware, DeleteProductCart);

export default router;