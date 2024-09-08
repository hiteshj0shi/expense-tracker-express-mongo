import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'local';

dotenv.config({ debug: true, path: `./config/.env.${NODE_ENV}` });

const CONFIG = {
    APP: {
        PORT: process.env.APP_PORT,
    },
    MONGODB: {
        CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
    },
};

export default CONFIG;
