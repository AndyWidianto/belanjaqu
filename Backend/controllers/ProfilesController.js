import ProfileService from "../services/ProfilesService.js";

export default class ProfileController {

    static async updateProfile(req, res) {
        const data = req.body;
        const { id } = req.params;
        try {
            await ProfileService.updateProfile(data, id);
            res.status(201).json({
                status: "success",
                message: "Profile Berhasil di Perbarui"
            });
        } catch (err) {
            console.error(err);
        }
    }
}