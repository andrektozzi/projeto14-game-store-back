import { authSignUpSchema } from "../schemas/authSchema.js";

export async function ValidadeSignUp(req, res, next) {
    
    const validation = authSignUpSchema.validate(req.body, {abortEarly: false });

    if(validation.error) {
        return res.sendStatus(422);
    }

    next();
}