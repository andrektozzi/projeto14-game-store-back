import { db, objectId } from "../db/mongo.js";

export async function AddProductsCheckout(req, res) {
    const {products, total}  = req.body;
    const { _id } = res.locals.user;
    console.log(_id)

    try {
        await db.collection("checkout").insertOne({
            products,
            total,
            userId: new objectId(_id)
        });
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function DeleteProductsCheckout(req, res) {
    const { _id } = res.locals.user;

    try {
        await db.collection("checkout").find({userId: new objectId(_id)}).toArray();
        await db.collection("checkout").deleteOne({userId: new objectId(_id)});
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}


export async function RenderProductsCheckout(req, res) {

    const { _id } = res.locals.user;
    console.log(_id)

    try {
        const productsCheckout = await db.collection("checkout").find({userId: new objectId(_id)}).toArray();
        res.send(productsCheckout);
    } catch (error) {
        res.sendStatus(500);
    }
}