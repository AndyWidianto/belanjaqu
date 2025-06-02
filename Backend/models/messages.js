import { DataTypes } from "sequelize";
import connect from "../config/database";
import users from "./users";

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
    }
}, {
    tableName: "messages",
    timestamps: true
});


users.hasMany(messages, { foreignKey: "sender_id" });
users.hasMany(messages, { foreignKey: "receiver_id" });


export default messages;