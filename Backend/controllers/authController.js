import AuthService from "../services/authService.js";

const authService = new AuthService();
export default class AuthController {
    async Login(req, res, next) {
        const { username, password } = req.body;
        try {
            const { accessToken, refreshToken } = await authService.login(username, password);
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                maxAge: 1000 * 60 * 60 * 24
            });
            res.status(200).json({
                message: "Berhasil Login",
                accessToken: accessToken
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async Register(req, res, next) {
        const { username, email, password } = req.body;
        try {
            const { accessToken, refreshToken } = await authService.Register(email, username, password);
            res.cookie("token", refreshToken, {
                httOnly: true,
                secure: false,
                maxAge: 1000 * 60 * 60 * 24
            })
            res.status(201).json({
                message: "Berhasil membuat user",
                accessToken
            })
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async RefreshToken(req, res, next) {
        const refreshToken = req.cookies.get("refreshToken");
        try {
            const accessToken = await authService.refreshToken(refreshToken);
            return res.json({
                message: "Berhasil",
                accessToken
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    Logout(req, res, next) {
        res.clearCookie("token");
        res.status(200).json({
            message: "Berhasil Logout"
        });
    }
}