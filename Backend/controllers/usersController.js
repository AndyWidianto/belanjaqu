import usersService from "../services/UsersService.js";


const userService = new usersService();
export default class UsersController {

    async getUsers(req, res, next) {
        const user = req.user;
        try {
            const users = await userService.getUsers(user);
            res.status(200).json({
                status: "success",
                data: users
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async createUser(req, res, next) {
        const body = req.body;
        const user = req.user;
        try {
            const user = await userService.createUser(user, body);
            res.json({
                message: "successfully",
                data: user
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async updateUser(req, res, next) {
        const body = req.body;
        const user = req.user;
        const { id } = req.params;
        try {
            const user = await userService.updateUser(user, id, body);
            res.json({
                message: "successfully",
                data: user
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getUser(req, res) {
        const { id } = req.params;
        try {
            const findUser = await userService.getUser(id);
            const user = findUser.profiles.map(value => {
                const url_cover = `${req.protocol}://${req.get('host')}/${value.cover_picture}`;
                const url_profile = `${req.protocol}://${req.get('host')}/${value.profile_picture}`;
                return {
                    url_cover,
                    url_profile,
                    ...value.dataValues
                }
            })
            res.status(200).json({ status: "success", data: user });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: "fail", message: err.message })
        }
    }
}