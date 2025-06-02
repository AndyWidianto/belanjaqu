import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import products from "./products.js";

const imagesProduct = connect.define("images_product", {
    image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: "product_id"
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "images_product",
    timestamps: true
});

products.hasMany(imagesProduct, { foreignKey: "product_id" });

export default imagesProduct;