import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db, objectId } from "../db/mongo.js";

export async function CreateUser(req, res) {
    
    const user = req.body;
    const { email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        const userExist = await db.collection("users").findOne({ email });

        if(userExist) {
            return res.sendStatus(409);
        }

        await db.collection("users").insertOne({ ...user, password: passwordHash });
        return res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}