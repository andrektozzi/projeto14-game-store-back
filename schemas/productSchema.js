import joi from "joi";

export const productSchema =  joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    urlImage: joi.string().required(),
    category: joi.string().valid("thesims", "sports", "fps", "rpg", "starwars", "action").required()
}
)