import Users from '../../database/schemas/userSchama.js';

const UsersService = {
    find: async function ({ limit, offset }) {
        const users = await Users.find().limit(limit).skip(offset).exec();
        return users;
    },
    findOne: async function ({ id }) {
        const user = await Users.findOne({ _id: id }).exec();

        if (user) {
            return Promise.resolve(user);
        }
        return Promise.reject();
    },
    create: async function ({ createUser }) {
        try {
            const user = await Users.create(createUser);
            if (user) {
                return Promise.resolve(user);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    },
    updateOne: async function ({ id, updateUser }) {
        try {
            const user = await this.findOne({ id });

            await user.set(updateUser).save();

            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    delete: async function ({ id }) {
        const user = await this.findOne({ id });
        await user.deleteOne();
    },
};

export default UsersService;
