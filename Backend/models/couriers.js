import { DataTypes } from "sequelize";
import connect from "../config/database";

const couriers = connect.define("couriers", {
    courier_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_active: {
        type: DataTypes.ENUM("true", "false"),
        allowNull: false
    }
}, {
    tableName: "couriers",
    timestamps: true
});

export default couriers;