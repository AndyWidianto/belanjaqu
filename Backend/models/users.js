import { DataTypes } from "sequelize";
import connect from "../config/database.js";

const users = connect.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("super_admin", "admin", "user"),
        allowNull: false,
        defaultValue: "user"
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: "users",
    timestamps: true
});


export default users;