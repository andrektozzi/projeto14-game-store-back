import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import productsRouter from "./routes/productsRouter.js"

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);
app.use(productsRouter);
app.listen(process.env.PORT, () => console.log("Server on!"));