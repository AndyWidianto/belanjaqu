import ProductsService from "../services/ProductsService.js";

export default class ProductsController {

    static async getProducts(req, res) {
        try {
            const products = await ProductsService.getProducts();
            res.status(200).json({
                status: "success",
                data: products
            });
        } catch (err) {
            return res.status(404)
        }
    }
    static async updateProduct(req, res) {
        const { id } = req.params;
        const data = req.body;
        if (!data) {
            return res.status(404).json({
                status: "fail",
                message: "data Not Found"
            });
        }
        try {
            await ProductsService.updateProduct(id, data);
            res.status(201).json({
                status: "success",
                message: "Berhasil update product"
            });
        } catch (err) {
            return res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
    static async createProduct(req, res) {
        const { categori_id, name, slug, description, price, stock, weight } = req.body;
        if (!categori_id) {
            return res.status(404).json({
                status: "fail",
                message: "Categori Not Found"
            });
        }
        try {
            const create = await ProductsService.createProduct({ categori_id, name, slug, description, price, stock, weight});
            res.status(201).json({
                status: "success",
                message: "Berhasil menambahkan product"
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                error: "Internal Server Error"
            })
        }
    }
    static async getProduct(req, res) {
        const { id } = req.params;
        try {
            const product = await ProductsService.getProduct(id);
            res.status(200).json({
                status: "success",
                data: product
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                error: "Internal Server Error"
            })
        }
    }
}