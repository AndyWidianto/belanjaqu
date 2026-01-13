import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import categories from "./categories.js";

const products = connect.define("products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: categories,
            key: "id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.ENUM("active", "draft")
    }
}, {
    tableName: "products",
    timestamps: true
});

export default products;
