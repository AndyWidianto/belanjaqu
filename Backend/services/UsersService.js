import { Op } from "sequelize";
import model from "../models/index.js";

export default class usersService {

    static async getUsers() {
        const users =  await model.users.findAll();
        return users;
    }

    static async login(username) {
        const user = await model.users.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: username },   
                ]
            }
        });

        return user;
    }

    static async Register(email, username, password) {
        const user = await model.users.create({
            email: email,
            username: username,
            password: password
        });
        await model.profiles.create({
            user_id: user.user_id,
            full_name: username
        });
        return user;
    }

    static async getUser(id) {
        const user = await model.users.findOne({
            attributes: ["user_id", "username"],
            where: {
                user_id: id
            },
            include: {
                model: model.profiles
            }
        });
        return user;
    }

    static async getUserFromUsername(username) {
        const user = await model.users.findOne({
            where: {
                username: username
            },
            attributes: ["user_id", "username", "email", "createdAt", "updatedAt"],
            include: {
                model: model.profiles
            }
        });
        return user;
    }
}