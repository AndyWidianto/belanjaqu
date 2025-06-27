import model from "../models/index.js";

export default class ProductsService {

    static async getProducts() {
        return await model.products();
    }
    static async updateProduct(id, data) {
        const product = await model.products.update(data, {
            where: {
                product_id: id
            }
        });
        return product;
    }
    static async createProduct(data) {
        const create = await model.products.create(data);
        return create;
    }
    static async getProduct(id) {
        return await model.products.findOne({
            where: {
                product_id: id
            }
        })
    }
}