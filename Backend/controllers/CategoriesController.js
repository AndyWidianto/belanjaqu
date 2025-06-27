import CategoiresService from "../services/CategoriesService.js";

export default class categoiresController {

    static async getCategories(req, res) {
        try {
            const categoires = await CategoiresService.getCategories();
            res.status(200).json({
                status: "success",
                data: categoires
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
}