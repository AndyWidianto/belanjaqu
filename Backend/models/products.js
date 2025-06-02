import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import categories from "./categories.js";

const products = connect.define("products", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categori_id: {
        type: DataTypes.INTEGER,
        references: {
            model: categories,
            key: "categori_id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
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
        type: DataTypes.FLOAT,
        allowNull: true,
    }
}, {
    tableName: "products",
    timestamps: true
});


categories.hasMany(products, { foreignKey: "categori_id" });

export default products;
