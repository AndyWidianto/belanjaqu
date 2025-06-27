import MessagesService from "../services/MessagesService.js";
import usersService from "../services/UsersService.js";

export default class MessagesController {

    static async getMessages(req, res) {
        const { name } = req.params;
        const user = req.user;
        try {
            const finduser = await usersService.getUserFromUsername(name);
            if (!finduser) {
                return res.status(404).json({
                    status: "fail",
                    message: "Username Not Found"
                });
            }
            const messages = await MessagesService.getMessages(user.id, finduser.user_id);
            const ListMessages = messages.map((value) => {
                const partnerId = value.sender_id === user.id ? value.receiver_id : value.sender_id;
                return {
                    partnerId,
                    ...value.dataValues
                }
            })
            res.status(200).json({
                status: "success",
                data: ListMessages
            })
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                error: "Internal Server Error"
            })
        }
    }
    static async getLastMessage(req, res) {
        const user = req.user;
        try {
            const partners = await MessagesService.getLastMessage(user.id);
            for (const partner of partners) {
                const partnerId = partner.sender_id === user.id ? partner.receiver_id : partner.sender_id;
                partner.user = await usersService.getUser(partnerId);
            }
            const partnersList = partners.map((value) => {
                const partnerId = value.sender_id === user.id ? value.receiver_id : value.sender_id;
                return {
                    partnerId,
                    ...value
                }
            })
            res.status(200).json({
                status: "success",
                data: partnersList
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Erorr" });
        }
    }
}