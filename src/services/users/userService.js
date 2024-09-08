import Users from '../../database/schemas/userSchama.js';

const UsersService = {
    find: async function ({ limit, offset }) {
        const users = await Users.find().limit(limit).skip(offset).exec();
        return users;
    },
    findOne: async function ({ id }) {
        const user = await Users.findOne({ id }).exec();

        if (user) {
            return Promise.resolve(user);
        }
        return Promise.reject();
    },
    create: async function ({ name, email }) {
        try {
            const user = await Users.create({ email, name });
            if (user) {
                return Promise.resolve(user);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    },
    updateOne: async function ({ id }, updateUser) {
        const user = await this.findOne({ id });
        await user
            .updateOne(id, {
                ...updateUser,
            })
            .exec();
        return Promise.resolve();
    },
    delete: async function ({ id }) {
        const user = await this.findOne({ id });
        await user.deleteOne();
    },
};

export default UsersService;
