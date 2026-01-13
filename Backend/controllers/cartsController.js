import model from "../models";

export default class CartsController {

    async getCarts(user) {
        const carts = await model.carts.findAll({
            where: {
                user_id: user.id
            },
            include: [
                {
                    model: model.productItems,
                    include: {
                        model: model.products
                    }
                }
            ]
        });
        return carts;
    }
    async createCart(user, { product_item_id, quantity }) {
        const total = await model.carts.findAll({
            where: {
                user_id: user.id
            },
            attributes: [
                ""
            ]
        })
        const cart = await model.carts.create({ user_id: user.id, product_item_id, quantity });
    }
}