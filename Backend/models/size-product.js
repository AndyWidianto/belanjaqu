import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import products from "./products.js";

const sizeProduct = connect.define("size_product", {
    size_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: "product_id"
        }
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "size_product",
    timestamps: true
});

products.hasMany(sizeProduct, { foreignKey: "product_id" });


export default sizeProduct;