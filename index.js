import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import productsRouter from "./routes/productsRouter.js"
import cartRouter from "./routes/cartRouter.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);
app.use(productsRouter);
app.use(cartRouter);

app.listen(process.env.PORT, () => console.log("Server on!"));