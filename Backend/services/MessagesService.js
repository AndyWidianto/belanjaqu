import { Op, Sequelize } from "sequelize";
import model from "../models/index.js";
import connect from "../config/database.js";

export default class MessagesService {

    static async getMessages(userId, partnerId) {
        return await model.messages.findAll({
            where: {
                [Op.or]: [
                    { 
                        sender_id: userId,
                        receiver_id: partnerId
                     },
                    { 
                        receiver_id: userId,
                        sender_id: partnerId
                     }
                ]
            },
            order: [['createdAt', 'ASC']]
        });
    }
    static async createMessage(data) {
        return await model.messages.create(data);
    }
    static async updateMessage(id, data) {
        return await model.messages.update(data, {
            where: {
                message_id: id
            }
        })
    }
    static async getLastMessage(id) {
        const [results, metadata] = await connect.query(`
            SELECT * FROM messages m1
            WHERE NOT EXISTS (
            SELECT ${id} FROM messages m2 
            WHERE 
            ((LEAST(m2.sender_id, m2.receiver_id) = LEAST(m1.sender_id, m1.receiver_id)) AND 
            (GREATEST(m2.sender_id, m2.receiver_id) = GREATEST(m1.sender_id, m1.receiver_id)) AND 
            m2.createdAt > m1.createdAt)
            ) ORDER BY createdAt DESC`)

        return results;
    }
}