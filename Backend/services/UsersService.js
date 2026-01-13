import { Op } from "sequelize";
import AppError from "../errors/customError.js";
import model from "../models/index.js";


export default class usersService {

    async getUsers(user) {
        if (user.role !== "super_admin") {
            throw new AppError("Validation failed", 403, { message: "You are not allowed get users"});
        }
        const users =  await model.users.findAll();
        return users;
    }
    async createUser(user, { email, password, username }) {
        if (user.role !== "super_admin") {
            throw new AppError("Validation failed", 403, { message: "You are not allowed get users"});
        }
        const findUser = await model.users.findOne({ where: {
            [Op.or]: [
                { username: username },
                { email: email }
            ]
        }});
        if (findUser) {
            throw new AppError("User is already", 419, { message: "User is Already" });
        }
        const newUser = await model.users.create({ email, username, password });
        return newUser.toJSON();
    }
    async updateUser(user, id, { email, password, username }) {
        if (user.role !== "super_admin") {
            throw new AppError("Validation failed", 403, { message: "You are not allowed get users"});
        }
        const findUser = await model.users.findOne({ where: {
            [Op.or]: [
                { username: username },
                { email: email }
            ]
        }});
        if (!findUser) {
            throw new AppError("User is Not found", 419, { message: "User is Not found" });
        }
        await findUser.update({ email, username, password });
        return findUser.toJSON();
    }

    async getUser(id) {
        const user = await model.users.findOne({
            attributes: ["user_id", "username", "email"],
            where: {
                user_id: id
            },
            include: {
                model: model.profiles
            }
        });
        return user;
    }
}