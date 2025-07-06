import SizeService from "../services/SizesService.js";

export default class SizesController {

    static async createSizes(req, res) {
        const sizes = req.body;
        const { id } = req.params;
        try {
            for (const item of sizes) {
                const size = item.size + item.satuan;
                await SizeService.createSize({ size , product_id: id });
            }
            res.status(201).json({
                status: "success",
                message: "Berhasil menambahkan size"
            })
        } catch (err) {
            console.error(err);
        }
    }
}