import { Router } from "express";
import { TokenMiddleware } from "../middlewares/tokenMiddleware.js"
import { AddProductCart, DeleteProductCart, RenderProductsCart } from "../controllers/cartControllers.js";

const router = Router();

router.post("/cart", TokenMiddleware, AddProductCart);
router.delete("/cart/:id", TokenMiddleware, DeleteProductCart);
router.get("/cart", TokenMiddleware, RenderProductsCart);

export default router;