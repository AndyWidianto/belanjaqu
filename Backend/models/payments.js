import { DataTypes } from "sequelize";
import connect from "../config/database";
import payment_types from "./payment-types";

const payments = connect.define("payments", {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: payment_types,
            key: "type_id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM("manual", "automatic"),
        allowNull: false
    },
    is_active: {
        type: DataTypes.ENUM("true", "false"),
        allowNull: false
    },
    instructions: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "payments",
    timestamps: true
});

payment_types.hasMany(payments, { foreignKey: "type_id" });

export default payments;