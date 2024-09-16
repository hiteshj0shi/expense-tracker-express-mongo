import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().trim().trim(),
    avatar: Joi.string().trim(),
    phoneNumber: Joi.string().trim(),
})
    .required()
    .options({ stripUnknown: true });

export const validateUpdateUser = async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body);
        req.body = value;
        next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
