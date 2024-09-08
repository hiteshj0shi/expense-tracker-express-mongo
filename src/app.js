import express from 'express';
import userRouter from './controllers/users/userController.js';
import { connectMongooseDatabase } from './database/index.js';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

(async () => {
    await connectMongooseDatabase();
})();

export default app;
