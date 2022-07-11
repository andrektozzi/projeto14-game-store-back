import { db, objectId } from "../db/mongo.js";
import { purchaseSchema } from "../schemas/purchaseSchema.js";

export async function AddPurchase(req, res) {
    const {productsCheckout, total, paymentMethod}  = req.body;
    const { _id } = res.locals.user;
    console.log(_id);

    const validation = purchaseSchema.validate({productsCheckout, total, paymentMethod}, { abortEarly: false });

    if(validation.error) {
        const messages = validation.error.details.map(e => e.message);
        return res.status(422).send(messages);
    }
    

    try {
        await db.collection("purchases").insertOne({
            productsCheckout,
            total,
            paymentMethod,
            userId: new objectId(_id)
        });
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function RenderPurchases(req, res) {

    const { _id } = res.locals.user;
    console.log(_id)

    try {
        const productsCheckout = await db.collection("purchases").find({userId: new objectId(_id)}).toArray();
        res.send(productsCheckout);
    } catch (error) {
        res.sendStatus(500);
    }
}