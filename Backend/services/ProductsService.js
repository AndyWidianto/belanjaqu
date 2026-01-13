import AppError from "../errors/customError.js";
import model from "../models/index.js";
import { deleteImage } from "../untils/deleteImage.js";

export default class ProductsService {

    vaildateRole(role) {
        if (role !== "super_admin" && role !== "admin") {
            throw new AppError("Role is not Allowed", 403, { message: "Anda tidak diizinkan" });
        }
    }
    async getProducts() {
        return await model.products.findAll({
            include: {
                model: model.productItems
            }
        });
    }
    async updateProduct(user, id, { category_id, name, description, slug, status, product_specifications }) {
        this.vaildateRole(user.role);
        const product = await model.products.findOne({
            where: {
                id
            }
        })
        await product.update({ category_id, name, description, slug, status });
        const productJson = product.toJSON();
        const productSpecifications = await model.productSpecification.bulkCreate(product_specifications, {
            updateOnDuplicate: ["value", "product_id"]
        })
        return { ...productJson, product_specifications: productSpecifications };
    }
    async createProduct(user, { category_id, name, description, slug, status, product_specifications }) {
        this.vaildateRole(user.role);
        const product = await model.products.create({ category_id, name, description, slug, status });
        const productJson = product.toJSON();
        product_specifications = product_specifications.map(p => ({ ...p, product_id: productJson.id }));
        const productSpecifications = await model.productSpecification.bulkCreate(product_specifications);
        return { ...productJson, product_specifications: productSpecifications };
    }
    async getProduct(id, protocol, host) {
        const product = await model.products.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: model.productItems
                },
                {
                    model: model.productSpecification
                }
            ]
        });
        if (!product) {
            throw new AppError("product not found", 404, { message: "Product not found" });
        }
        const productJson = product.toJSON();
        productJson.product_items = productJson.product_items.map((item) => {
            item.image = `${protocol}://${host}/${item.image}`;
            return { ...item };
        });
        return productJson;
    }
    async deleteProduct(user, id) {
        this.vaildateRole(user.role);
        await model.products.destroy({ where: { id } });
        return true;
    }
    async createProductItem(user, { product_id, variant, price, stock, weight, image }) {
        this.vaildateRole(user.role);
        return model.productItems.create({ product_id, variant, price, stock, weight, image })
    }
    async updateProductItem(user, id, { product_id, variant, price, stock, weight, image }) {
        this.vaildateRole(user.role);
        const productItem = await model.productItems.findOne({ where: { id } });
        if (!productItem) {
            throw new AppError("Product not found", 404, { message: "Product Not found" });
        }
        const productItemJson = productItem.toJSON();
        if (image !== productItemJson.image) {
            await deleteImage(productItemJson.image);
        }
        await productItem.update({ product_id, variant, price, stock, weight, image });
        return productItem.toJSON();
    }
    async deleteProductItem(user, id) {
        this.vaildateRole(user.role);
        const findProductItem = await model.productItems.findOne({ where: { id }});
        if (findProductItem) {
            const productItemJson = findProductItem.toJSON();
            await deleteImage(productItemJson.image);
        }
        return await model.productItems.destroy({
            where: { id }
        });
    }
    async getProductItems() {
        return await model.productItems.findAll();
    }
}