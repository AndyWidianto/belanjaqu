import { DataTypes } from "sequelize";
import connect from "../config/database.js";

const categories = connect.define("categories", {
    categori_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "categories",
    timestamps: true,
});

export default categories;