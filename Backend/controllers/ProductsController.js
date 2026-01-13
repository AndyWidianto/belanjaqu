import ProductsService from "../services/ProductsService.js";

const productService = new ProductsService();
export default class ProductsController {

    createSlug(text) {
        return text.toString().toLowerCase().trim().replace(/[\s\W-]+/g, "-");
    }
    async getProducts(req, res, next) {
        try {
            const products = await productService.getProducts();
            return res.status(200).json({
                status: "success",
                data: products
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async updateProduct(req, res, next) {
        const id = req.params.id;
        const user = req.user;
        const { category_id, name, description, status, product_specifications } = req.body;
        const slug = name.toString().toLowerCase().trim().replace(/[\s\W-]+/g, "-");
        try {
            const product = await productService.updateProduct(user, id, { category_id, name, description, status, slug, product_specifications });
            res.json({
                message: "successfully",
                data: product
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async createProduct(req, res, next) {
        const user = req.user;
        const { category_id, name, description, status, product_specifications } = req.body;
        const slug = name.toString().toLowerCase().trim().replace(/[\s\W-]+/g, "-");
        try {
            const product = await productService.createProduct(user, { category_id, name, description, status, slug, product_specifications });
            res.status(201).json({
                message: "Successfully create product",
                data: product
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getProduct(req, res, next) {
        const { id } = req.params;
        try {
            const product = await productService.getProduct(id, req.protocol, req.get("host"));
            res.status(200).json({
                message: "Successfully",
                data: product
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async deleteProduct(req, res, next) {
        const { id } = req.params;
        const user = req.user;
        try {
            await productService.deleteProduct(user, id);
            res.status(200).json({
                status: "success",
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async createProductItem(req, res, next) {
        const body = req.body;
        const user = req.user;
        const image = req.file ? req.file.filename : null;
        try {
            const productItem = await productService.createProductItem(user, { ...body, image });
            res.json({
                message: "Successfully",
                data: productItem
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async updateProductItem(req, res, next) {
        const { id } = req.params;
        const user = req.user;
        const image = req.file ? req.file.filename : null;
        const body = req.body;
        try {
            const productItem = await productService.updateProductItem(user, id, { ...body, image });
            res.json({
                message: "Successfully",
                data: productItem
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async deleteProductItem(req, res, next) {
        const { id } = req.params;
        const user = req.user;
        try {
            await productService.deleteProductItem(user, id);
            res.json({
                message: "Successfully delete item product"
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getProductItems(req, res, next) {
        try {
            const productItems = await productService.getProductItems();
            res.json({
                message: "Successfully",
                data: productItems
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}