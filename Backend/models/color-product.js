import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import products from "./products.js";

const colorProduct = connect.define("color_product", {
    color_id: {
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
    color: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "color_product",
    timestamps: true
});

products.hasMany(colorProduct, { foreignKey: "product_id" });

export default colorProduct;