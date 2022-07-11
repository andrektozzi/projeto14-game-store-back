import joi from "joi";

export  const checkoutSchema =  joi.object({
    products: joi.array().items(joi.object({
        title: joi.string().required(),
        urlImage: joi.string().uri().required(),
        _id: joi.string().required(),
    })).required(),
    total: joi.number().precision(2).positive().required()
}
)