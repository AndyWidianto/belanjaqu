import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import carts from "./carts.js";
import productItems from "./productItems.js";


const cartItems = connect.define("cart_items", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        references: {
            model: carts,
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
    }
}, {
    tableName: "cart_items",
    timestamps: true
});


export default cartItems;