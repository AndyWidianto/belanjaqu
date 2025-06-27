import { createToken } from "../midelwares/token.js";
import usersService from "../services/UsersService.js";

export default class UsersController {

    static async getUsers(req, res) {
        const { username } = req.query;
        try {
            if (username) {
                const user = await usersService.getUserFromUsername(username);
                return res.status(200).json({
                    status: "success",
                    data: user
                })
            }
            const resUsers = await usersService.getUsers();
            res.status(200).json({
                status: "success",
                data: resUsers?.map(value => {
                    return {
                        id: value.user_id,
                        email: value.email,
                        username: value.username
                    }
                })
            });
        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    static async Login(req, res) {
        const { username, password } = req.body;

        try {
            const user = await usersService.login(username);
            if (!user) {
                return res.status(403).json({ status: "fail", message: "Email atau Username tidak ditemukan!" });
            }
            if (user.password !== password) {
                return res.status(403).json({ status: "fail", message: "Password tidak Valid!"})
            }
            const token = createToken(user.user_id, user.username, user.email);
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                maxAge: 1000 * 60 * 60 * 24
            });
            res.status(200).json({
                status: "success",
                message: "Berhasil Login",
            });
        } catch (err) {
            return res.status(404).json({ message: "gagal login" });
        }
    }

    static async Register(req, res) {
        const { username, email, password } = req.body;
        try {
            const user = await usersService.Register(email, username, password);
            if (!user) {
                return res.status(404).json({ message: "User Not Found" });
            }
            const token = createToken(user.user_id, user.username, user.email);
            res.cookie("token", token, {
                httOnly: true,
                secure: false,
                maxAge: 40000
            })
            res.status(201).json({
                status: "success",
                message: "Berhasil membuat user"
            })
        } catch (err) {
            return res.status(404).json({ message: "gagal", error: err });
        }
    }
    static async getUser(req, res) {
        const { id } = req.params;
        try {
            const findUser = await usersService.getUser(id);
            res.status(200).json({ status: "success", data: findUser });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: "fail", message: err.message })
        }
    }
    static parseCookie(req, res) {
        const user = req.user;
        return res.status(200).json({
            status: "success",
            data: user
        });
    }
    static Logout(req, res) {
        res.clearCookie("token");
    }
}