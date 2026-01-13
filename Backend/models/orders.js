import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import users from "./users.js";

const orders = connect.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "id",
        }
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "processing", "paid", "shipped", "delivered", "completed", "cancelled", "refunded", "returned"),
        allowNull: false
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tracking_number: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "orders",
    timestamps: true
});

export default orders;