import { DataTypes } from "sequelize";
import connect from "../config/database";

const payment_types = connect.define("payment_types", {
    type_id: {
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


export default payment_types;