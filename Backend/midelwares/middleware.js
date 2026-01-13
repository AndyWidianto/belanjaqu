import jwt from "jsonwebtoken";

export function Authentication(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({
            status: "fail",
            message: "cookie Not Found"
        });
    }
    try {
        const token = auth.split(" ")[1];
        const verify = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
        req.user = verify;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({
            error: "unautorization"
        });
    }
}