import { DataTypes } from "sequelize";
import connect from "../config/database.js";
import users from "./users.js";

const orders = connect.define("orders", {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: "user_id",
        }
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("Pending", "Processing", "Paid", "Shipped", "Delivered", "Completed", "Cancelled", "Refunded", "Returned"),
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


users.hasMany(orders, { foreignKey: "user_id" });

export default orders;