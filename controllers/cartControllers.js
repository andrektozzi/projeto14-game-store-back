import { db } from "../db/mongo.js";

export async function AddProductCart(req, res) {
    const { title, urlImage, price } = req.body;
    const { id } = res.locals;

    try {
        await db.collection("cart").insertOne({
            title,
            urlImage,
            price,
            userId: new ObjectId(id)
        });
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function DeleteProductCart(req, res) {
    const { id } = req.params;

    try {
        await db.collection("cart").deleteOne({ _id: new ObjectId(id) });
        const productsCart = await db.collection("cart").find({}).toArray();
        res.status(200).send(productsCart);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function RenderProductsCart(req, res) {

    try {
        const productsCart = await db.collection("cart").find({}).toArray();
        res.send(productsCart);
    } catch (error) {
        res.sendStatus(500);
    }
}