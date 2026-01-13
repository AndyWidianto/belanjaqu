import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import products from "./products.js";

const productItems = connect.define("product_items", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: "id"
        }
    },
    variant: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: "product_items",
    timestamps: true
});

export default productItems;
