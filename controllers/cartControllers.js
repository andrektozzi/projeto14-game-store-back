import { db, objectId } from "../db/mongo.js";

export async function AddProductCart(req, res) {
    const { title, urlImage, price } = req.body;
    const { _id } = res.locals.user;
    console.log(_id)

    try {
        await db.collection("cart").insertOne({
            title,
            urlImage,
            price,
            userId: new objectId(_id)
        });
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function DeleteProductCart(req, res) {
    const { id } = req.params;
    const { _id } = res.locals.user;

    try {
        await db.collection("cart").deleteOne({ _id: new objectId(id) });
        const productsCart = await db.collection("cart").find({userId: new objectId(_id)}).toArray();
        res.status(200).send(productsCart);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function RenderProductsCart(req, res) {

    const { _id } = res.locals.user;
    console.log(_id)

    try {
        const productsCart = await db.collection("cart").find({userId: new objectId(_id)}).toArray();
        res.send(productsCart);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function DeleteCart(req, res) {
    const { _id } = res.locals.user;

    try {
      await db.collection("cart").deleteMany({userId: new objectId(_id)});
  
      const productsCart = await db.collection("cart").find({userId: new objectId(_id)}).toArray();
      console.log(productsCart);
      res.status(200).send(productsCart);
    } catch (error) {
      res.sendStatus(500);
    }
  }