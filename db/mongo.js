import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

mongoClient.connect().then(() => {
    db = mongoClient.db("game-store");
});

const objectId = ObjectId;

export { db, objectId };