import { Op } from "sequelize";
import model from "../models/index.js";

export default class usersService {

    static async getUsers() {
        const users =  await model.users.findAll();
        return users;
    }

    static async login(data) {
        const user = await model.users.findOne({
            where: {
                [Op.or]: [
                    { username: data },
                    { email: data },   
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
        return user;
    }
}