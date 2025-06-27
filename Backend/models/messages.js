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
            key: "user_id"
        }
    },
    receiver_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "user_id"
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


users.hasMany(messages, { foreignKey: "sender_id" });
users.hasMany(messages, { foreignKey: "receiver_id" });


export default messages;