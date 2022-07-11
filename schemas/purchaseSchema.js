import joi from "joi";

export const purchaseSchema =  joi.object({
    productsCheckout: joi.array().items(joi.object({
        userId: joi.string(),
        title: joi.string().required(),
        urlImage: joi.string().uri().required(),
        price: joi.number().precision(2).positive().required(),
        _id: joi.string().required(),
    })).required(),
    total: joi.number().precision(2).positive().required(),
    paymentMethod:joi.object({
        cardname: joi.string().required(),
        cardnumber:joi.string().creditCard().required(),
        expdate: joi.string().required().pattern(/^(0[1-9]|1[0-2])\/[0-9]{2}$/),
        cvv: joi.string().required().pattern(/^[0-9]{3}$/)
    }
    )

}
)