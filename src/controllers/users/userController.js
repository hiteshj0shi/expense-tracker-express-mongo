import { Router } from 'express';
import UsersService from '../../services/users/userService.js';
import { validateCreateUser } from './validators/createUserValidator.js';
import { validateUpdateUser } from './validators/updateUserValidator.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    const { limit, offset } = req.query;
    const users = await UsersService.find({ limit, offset });
    return res.json(users);
});

userRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const users = await UsersService.findOne({
            id,
        });
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

userRouter.post('/', validateCreateUser, async (req, res) => {
    try {
        const validatedBody = req.body;

        const user = await UsersService.create({ createUser: validatedBody });

        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

userRouter.patch('/:id', validateUpdateUser, async (req, res) => {
    const { id } = req.params;
    try {
        const validatedBody = req.body;
        console.log(req.body);

        const user = await UsersService.updateOne({
            id,
            updateUser: validatedBody,
        });

        return res.json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
});

userRouter.delete('/:id', async (req, res) => {
    const { id } = req.query;
    const users = await UsersService.delete({
        id,
    });
    return res.json(users);
});

export default userRouter;
