import { Router } from 'express';
import UsersService from '../../services/users/userService.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    const { limit, offset } = req.query;
    const users = await UsersService.find({ limit, offset });
    return res.json(users);
});

userRouter.get('/:id', async (req, res) => {
    const { id } = req.query;

    const users = await UsersService.findOne({
        id,
    });
    return res.json(users);
});

userRouter.post('/', async (req, res) => {
    const { name, email } = req.body;
    const user = await UsersService.create({
        name,
        email,
    });

    return res.json(user);
});

userRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await UsersService.updateOne(id, {
        name: 'hites',
        email: 'test',
    });

    return res.json(user);
});

userRouter.delete('/:id', async (req, res) => {
    const { id } = req.query;
    const users = await UsersService.delete({
        id,
    });
    return res.json(users);
});

export default userRouter;
