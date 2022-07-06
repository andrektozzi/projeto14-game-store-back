import { authLoginSchema, authSignUpSchema } from "../schemas/authSchema.js";

export async function ValidateSignUp(res, req, next) {

    const validation = authSignUpSchema.validate(req.body, { abortEarly: false });

    if(validation.error) {
        return res.sendStatus(422);
    }

    next();
}

export async function ValidateLogin(req, res, next) {
    
    const validation = authLoginSchema.validate(req.body, { abortEarly: false });

    if(validation.error) {
        return res.sendStatus(422);
    }

    next();
}