import jwt from "jsonwebtoken";

export function createToken(id, username, email) {
    const payload = {
        id: id,
        username: username,
        email: email
    }

    const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "24h" });
    return token;
}