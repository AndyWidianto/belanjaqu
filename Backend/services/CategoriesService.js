import AppError from "../errors/customError.js";
import model from "../models/index.js";

export default class CategoiresService {

    async getCategories() {
        return await model.categories.findAll();
    }
    async getCategory(id) {
        return model.categories.findAll({
            where: {
                id
            },
            include: [
                {
                    model: model.products
                }
            ]
        })
    }
    async createCategory(user, { name, slug, description }) {
        if (user.role !== "super_admin" && user.role !== "admin") {
            throw new AppError("Validation failed", 404, { message: "failed"});
        }
        if (!name.trim()) {
            throw new AppError("Failed", 404, { message: "category not found" });
        }
        return await model.categories.create({ name, slug, description });
    }
    async updateCategory(user, id, { name, slug, description }) {
        if (user.role !== "super_admin" && user.role !== "admin") {
            throw new AppError("Validation failed", 404, { message: "failed"});
        }
        if (!name.trim()) {
            throw new AppError("Failed", 404, { message: "category not found" });
        }
        const category = await model.categories.findOne({ where: { id: id }})
        await category.update({ name, slug, description });
        return category.toJSON();
    }
    async deleteCategory(user, id) {
        if (user.role !== "super_admin" && user.role !== "admin") {
            throw new AppError("Validation failed", 404, { message: "failed"});
        }
        return await model.categories.destroy({
            where: { id: id }
        });
    }
}