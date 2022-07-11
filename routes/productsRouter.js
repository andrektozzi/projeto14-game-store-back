import { getProducts, postProducts, deleteProducts } from "../controllers/productsController.js";
import { Router } from "express";

const router = Router();

router.get("/products", getProducts);
router.post("/products", postProducts);
router.delete("/products", deleteProducts);


export default router;