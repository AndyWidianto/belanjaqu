import users from "./users.js";
import categories from "./categories.js";
import products from "./products.js";
import imagesProduct from "./images-product.js";
import orders from "./orders.js";
import profiles from "./profiles.js";
import carts from "./carts.js";
import orderItems from "./order-items.js";
import messages from "./messages.js";

const model = {
    users: users,
    categories: categories,
    products: products,
    images_product: imagesProduct,
    orders: orders,
    profiles: profiles,
    carts: carts,
    order_items: orderItems,
    messages: messages
}

export default model;