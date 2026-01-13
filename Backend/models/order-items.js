import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import orders from "./orders.js";
import productItems from "./productItems.js";


const orderItems = connect.define("order_items", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: orders,
            key: "id"
        }
    },
    product_item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: productItems,
            key: "id"
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


export default orderItems;