import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import products from "./products.js";

const productSpecification = connect.define("product_specifications", {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "product_specifications",
    timestamps: true
});

export default productSpecification;
