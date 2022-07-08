import { getProducts, postProducts } from "../controllers/productsController.js";
import { Router } from "express";

const router = Router();

router.get("/products", getProducts);
router.post("/products", postProducts);


export default router;