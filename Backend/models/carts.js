import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import users from "./users.js";
import products from "./products.js";

const carts = connect.define("carts", {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "user_id",
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: "product_id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: "carts",
    timestamps: true
});

users.hasMany(carts, { foreignKey: "user_id" });
products.hasMany(carts, { foreignKey: "product_id" });

export default carts;