import { DataTypes } from "sequelize";
import connect from "../config/database.js";

const paymentTypes = connect.define("payment_types", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    payment_type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "payment_types",
    timestamps: true
});


export default paymentTypes;