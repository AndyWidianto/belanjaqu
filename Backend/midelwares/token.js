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

export function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(404).json({
            status: "fail",
            message: "cookie Not Found"
        });
    }
    try {
        const verify = jwt.verify(token, process.env.SECRET_JWT);
        req.user = verify;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}