import { Op } from "sequelize";
import AppError from "../errors/customError.js";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../token.service.js";
import model from "../models/index.js";

const salt = 10;
export default class AuthService {
    async login(username, password) {
        if (!username.trim()) {
            throw new AppError("Validation failed", 404, { email: "email is required" });
        }
        if (!password.trim()) {
            throw new AppError("Validation failed", 404, { email: "password is required" });
        }
        const user = await model.users.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: username },   
                ]
            }
        });
        if (!user) {
            throw new AppError("Validation failed", 401, { email: "user is not found" });
        }
        const userJson = user.toJSON();
        const checkPassword = bcrypt.compare(password, userJson.password);
        if (!checkPassword) {
            throw new AppError({ password: "Wrong password"}, 401);
        }
        const accessToken = createAccessToken(userJson);
        const refreshToken = createRefreshToken(userJson);
        await model.users.update({
            refresh_token: refreshToken
        }, {
            where: {
                id: userJson.id
            }
        });
        return { accessToken, refreshToken };
    }

    async Register(email, username, password) {
        if (!username.trim()) {
            throw new AppError("Validation failed", 404, { username: "username is required" });
        }
        if (!email.trim()) {
            throw new AppError("Validation failed", 404, { email: "email is required" });
        }
        if (!password.trim()) {
            throw new AppError("Validation failed", 404, { password: "password is required" });
        }
        const findEmail = await model.users.findOne({
            where: { email: email }
        });
        if (findEmail) {
            throw new AppError("Validation failed", 419, { email: "Email is already" });
        }
        password = await bcrypt.hash(password, salt);
        const user = await model.users.create({
            email: email,
            username: username,
            password: password, 
            role: "user"
        });
        const userJson = user.toJSON();
        const accessToken = createAccessToken(userJson);
        const refreshToken = createRefreshToken(userJson);
        await model.users.update({
            refresh_token: refreshToken,
        }, {
            where: {
                id: userJson.id
            }
        })
        return { accessToken, refreshToken };
    }
    async refreshToken(token) {
        const payload = verifyRefreshToken(token);
        const user = (await model.users.findOne({
            where: { id: payload.id }
        })).toJSON();
        if (user.refresh_token !== token) {
            throw new AppError("Validation failed", 403, { message: "Forbidden" });
        }
        const accessToken = createAccessToken(user);
        return accessToken;
    }
}