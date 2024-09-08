import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phoneNumber: String,
        avatar: String,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: { type: Date, defaults: null },
    },
    {
        timestamps: true,
        strict: true,
    }
);

const Users = mongoose.model('Users', userSchema);

export default Users;
