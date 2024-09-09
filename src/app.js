import express from 'express';
import userRouter from './controllers/users/userController.js';
import { connectMongooseDatabase } from './database/index.js';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('combined'));

app.use('/users', userRouter);

(async () => {
    await connectMongooseDatabase();
})();

export default app;
