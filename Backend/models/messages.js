import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import users from "./users.js";

const messages = connect.define("messages", {
    message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    sender_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "id"
        }
    },
    receiver_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "id"
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_read: {
        type: DataTypes.ENUM("true", "false")
    }
}, {
    tableName: "messages",
    timestamps: true
});


export default messages;