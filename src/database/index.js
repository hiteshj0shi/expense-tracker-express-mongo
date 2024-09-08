// Set up mongoose connection
import mongoose from 'mongoose';
import CONFIG from '../config/index.js';

// Set up mongoose connection
export const connectMongooseDatabase = async () => {
    try {
        await mongoose.connect(CONFIG.MONGODB.CONNECTION_URL);
        console.log('MongoDB Connection Successfull');
        return Promise.resolve('MongoDB Connection successful');
    } catch (error) {
        console.log(error);
        return Promise.reject('MongoDB Connection failed');
    }
};
