import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);

app.listen(process.env.PORT, () => console.log("Server on!"));