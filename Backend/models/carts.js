import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import users from "./users.js";

const carts = connect.define("carts", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "id",
        }
    }
}, {
    tableName: "carts",
    timestamps: true
});

export default carts;