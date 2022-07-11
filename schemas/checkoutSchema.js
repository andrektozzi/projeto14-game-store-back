import joi from "joi";

export  const checkoutSchema =  joi.object({
    products: joi.array().items(joi.object({
        userId: joi.string(),
        title: joi.string().required(),
        urlImage: joi.string().uri().required(),
        price: joi.number().precision(2).positive().required(),
        _id: joi.string().required(),
    })).required(),
    total: joi.number().precision(2).positive().required()
}
)