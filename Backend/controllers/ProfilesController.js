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
    static async updateProfilePicture(req, res) {
        const { filename } = req.file;
        const { id } = req.params;
        try {
            await ProfileService.updateProfilePicture(filename, id);
            res.status(201).json({
                status: "success",
                message: "Berhasil update image"
            })
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    static async updateCoverPicture(req, res) {
        const { id } = req.params;
        const { filename } = req.file;
        try {
            await ProfileService.updateCoverPicture(filename, id);
            res.status(200).json({
                status: "success",
                message: "Berhasil update cover picture"
            })
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    static async getProfile(req, res) {
        const user = req.user;
        try {
            const profile = await ProfileService.getProfile(user.id);
            profile.dataValues.profile_picture = profile.dataValues.profile_picture ? `${req.protocol}://${req.get('host')}/${profile.dataValues.profile_picture}` : null;
            profile.dataValues.cover_picture = profile.dataValues.cover_picture ? `${req.protocol}://${req.get('host')}/${profile.dataValues.cover_picture}` : null;
            res.status(200).json({
                status: "success",
                data: profile
            });
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
}