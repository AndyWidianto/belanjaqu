import users from "./users.js";
import categories from "./categories.js";
import products from "./products.js";
import orders from "./orders.js";
import carts from "./carts.js";
import orderItems from "./order-items.js";
import messages from "./messages.js";
import payments from "./payments.js";
import paymentTypes from "./payment-types.js";
import address from "./shipping-address.js";
import productItems from "./productItems.js";
import productSpecification from "./product_specification.js";
import cartItems from "./cartItems.js";

users.hasMany(orders, { foreignKey: "user_id" });
users.hasMany(carts, { foreignKey: "user_id" });
users.hasMany(messages, { foreignKey: "sender_id" });
users.hasMany(messages, { foreignKey: "receiver_id" });
users.hasMany(address, { foreignKey: "user_id" });

carts.hasMany(cartItems, { foreignKey: "cart_id" });

categories.hasMany(products, { foreignKey: "category_id" });;
orders.hasMany(orderItems, { foreignKey: "order_id" });
orders.hasMany(orderItems, { foreignKey: "id" });
paymentTypes.hasMany(payments, { foreignKey: "type_id" });

products.hasMany(orderItems, { foreignKey: "order_id" });
products.hasMany(productItems, { foreignKey: "product_id" });
products.hasMany(productSpecification, { foreignKey: "product_id" });

productItems.belongsTo(products, { foreignKey: "product_id" });
productItems.hasMany(orderItems, { foreignKey: "product_item_id" });

const model = {
    users,
    categories,
    products,
    orders,
    carts,
    cartItems,
    orderItems,
    messages,
    payments,
    paymentTypes,
    productItems,
    productSpecification
}

export default model;