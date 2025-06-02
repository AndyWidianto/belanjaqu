import { createToken } from "../midelware/create-roken.js";
import usersService from "../service/users-service.js";

export default class UsersController {

    static async getUsers(req, res) {
        try {
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
            return res.status(404).json({ message: err });
        }
    }

    static async Login(req, res) {
        const { username, password } = req.body;

        try {
            const user = usersService.login(username);
            if (!user) {
                return res.status(404).json({ message: "bad request" });
            }
            const token = createToken(user.user_id, user.username, user.email);

            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                maxAge: 4000
            });
            res.status(200).json({
                status: "success",
                message: "Berhasil Login"
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
                return res.status(404).json({ message: "bad request" });
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

    static async Logout(req, res) {
        res.clearCookie("token");
    }
}