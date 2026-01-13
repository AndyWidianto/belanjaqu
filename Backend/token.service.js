import jwt from "jsonwebtoken";
import AppError from "./errors/customError.js";

export function createAccessToken(user) {
    delete user.password;
    const token = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, { expiresIn: "24h" });
    return token;
}

export function createRefreshToken(user) {
    delete user.password;
    return jwt.sign(user, process.env.SECRET_REFRESH_TOKEN, { expiresIn: "30d" });
}

export function verifyRefreshToken(token) {
    if (!token) {
        throw new AppError("Validation failed", 401, { message: "unauthorization" });
    }
    try {
        const verify = jwt.verify(token, process.env.SECRET_REFRESH_TOKEN);
        return verify;
    } catch (err) {
        console.error(err);
        throw new AppError("Validation failed", 401, { message: "unauthorization" });
    }
}

