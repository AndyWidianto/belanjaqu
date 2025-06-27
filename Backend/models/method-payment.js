import { DataTypes } from "sequelize";
import connect from "../config/database";
import products from "./products";

const payments = connect.define("methods_payment", {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: "product_id"
        },
    },
    name_payment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomer_rekening: {
        type: DataTypes.INTEGER,
        allowNull: false    
    }
}, {
    tableName: "methods_payments",
    timestamps: true
});


products.hasMany(payments, { foreignKey: "product_id" });

export default payments;



