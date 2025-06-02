import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import orders from "./orders.js";
import products from "./products.js";


const orderItems = connect.define("order_items", {
    item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: orders,
            key: "order_id"
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
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
}, {
    tableName: "order_items",
    timestamps: true
});

orders.hasMany(orderItems, { foreignKey: "order_id" });
products.hasMany(orderItems, { foreignKey: "product_id" });

export default orderItems;