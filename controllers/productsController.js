import { db } from "../db/mongo.js";

export async function getProducts(req, res){

    const products = await db.collection('products').find({}).toArray();

    res.status(200).send(products);
}

export async function postProducts (req,res){

    const { title, description, urlImage, category} = req.body;

    const promise = await db.collection('products').insert({title, description, urlImage, category});

    if(!promise){
        return res.sendStatus(401)
    }

    res.sendStatus(201);
}