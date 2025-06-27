import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import users from "./users.js";

const profiles = connect.define("profiles", {
    profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: users,
            key: 'user_id'
        }
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gender: {
        type: DataTypes.ENUM("Man", "Woman"),
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: null,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cover_picture: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "profiles",
    timestamps: true
});

users.hasMany(profiles, { foreignKey: "user_id" });

export default profiles;
