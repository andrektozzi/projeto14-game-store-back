import { db } from "../db/mongo.js";
import { productSchema } from "../schemas/productSchema.js";

export async function getProducts(req, res){

    const products = await db.collection('products').find({}).toArray();

    res.status(200).send(products);
}

export async function postProducts (req,res){

    const { title, description, urlImage, category, price} = req.body;

    const validation = productSchema.validate({title,description, urlImage, category, price}, { abortEarly: false });

    if(validation.error) {
        const messages = validation.error.details.map(e => e.message);
        return res.status(422).send(messages);
    }

    const repeteadTitle = await db.collection('products').find({title, category}).toArray();

    if(repeteadTitle.length != 0){
        return res.status(422).send("This title already exist in this category");
    }
    const promise = await db.collection('products').insert({title, description, urlImage, category, price});

    if(!promise){
        return res.sendStatus(401)
    }

    res.sendStatus(201);
}