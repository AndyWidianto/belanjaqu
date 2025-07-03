import ImagesProductService from "../services/imagesProductService.js";

export default class ImagesProductController {

    static async createImages(req, res) {
        const { id } = req.params;
        const image = req.files;
        try {
            await image.map(value => {
                ImagesProductService.createImages(value.filename, id);
            })
            res.status(201).json({
                status: "success",
                message: "Berhasil Menambahkan Images"
            })
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    static async updateImages(req, res) {
        const { id } = req.params;
        const images = req.files;
        try {
            for (const image of images) {
                await ImagesProductService.updateImages(image.filename, id);
            }
            res.status(200).json({
                status: "success",
                message: "Berhasil update produk"
            })
        } catch (err) {
            console.error(err);
            return res.status(500);
        }
    }
}