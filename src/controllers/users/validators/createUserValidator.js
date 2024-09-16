import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    avatar: Joi.string().trim(),
    phoneNumber: Joi.string().trim(),
})
    .required()
    .options({ stripUnknown: true });

export const validateCreateUser = async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body);
        req.body = value;
        next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
