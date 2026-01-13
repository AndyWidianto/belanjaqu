import CategoiresService from "../services/CategoriesService.js";

const caetgoryService = new CategoiresService();
export default class categoiresController {

    async getCategories(req, res, next) {
        try {
            const categoires = await caetgoryService.getCategories();
            res.status(200).json({
                status: "success",
                data: categoires
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getCategory(req, res, next) {
        const { id } = req.params;
        try {
            const categories = await caetgoryService.getCategory(id);
            res.json({
                message: "successfully",
                data: categories
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async createCategory(req, res, next) {
        const { name, description } = req.body;
        const user = req.user;
        if (!name) {
            return res.status(404).json("Name Categorie Not Found");
        }
        try {
            const category = await caetgoryService.createCategory(user, { name, slug: name, description })
            res.status(201).json({
                message: "Successfully create category",
                data: category
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async updateCategory(req, res, next) {
        const body = req.body;
        const { id } = req.params;
        const user = req.user;
        try {
            const category = await caetgoryService.updateCategory(user, id, body);
            res.json({
                message: "successfully",
                data: category
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async deleteCategory(req, res, next) {
        const { id } = req.params;
        const user = req.user;
        try {
            await caetgoryService.deleteCategory(user, id);
            res.json({
                message: "successfully delete category"
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}