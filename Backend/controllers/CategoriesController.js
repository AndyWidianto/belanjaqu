import CategoiresService from "../services/CategoriesService.js";

export default class categoiresController {

    static async getCategories(req, res) {
        try {
            const categoires = await CategoiresService.getCategories();
            const runtimeCategories = categoires.map(categoire =>{
                categoire.dataValues.picture = `${req.protocol}://${req.get('host')}/${categoire.dataValues.picture}`;
                return {
                    ...categoire.dataValues
                }
            })
            res.status(200).json({
                status: "success",
                data: runtimeCategories
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
    static async createCategories(req, res) {
        const { name, slug, description } = req.body;
        const picture = req.file.filename;
        if (!name) {
            return res.status(404).json("Name Categorie Not Found");
        }
        try {
            await CategoiresService.createCategories({name, slug, description, picture})
            res.status(201).json({
                status: "success",
                message: "Categorie Berhasil ditambahkan"
            })
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}