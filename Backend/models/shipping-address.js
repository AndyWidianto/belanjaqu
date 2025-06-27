import { DataTypes } from "sequelize";
import connect from "../config/database";
import users from "./users";

const address = connect.define("shipping_address", {
    adddres_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "user_id",
        }
    },
    receiver: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    add_notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city_or_district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subdistrict: {
        type: DataTypes.STRING,
        allowNull: false
    },
    village: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code_pos: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "shipping_address",
    timestamps: true
});

users.hasMany(address, { foreignKey: "user_id" });

export default address;