import model from "../models/index.js";

export default class ProfileService {

    static async updateProfile(data, id) {
        return await model.profiles.update(data, {
            where: {
                profile_id: id
            }
        })
    }
    static async updateProfilePicture(image, id) {
        return await model.profiles.update({
            profile_picture: image
        }, {
            where: {
                profile_id: id
            }
        })
    }
    static async updateCoverPicture(image, id) {
        return await model.profiles.update({
            cover_picture: image
        }, {
            where: {
                profile_id: id
            }
        })
    }
    static async getProfile(id) {
        return await model.profiles.findOne({
            where: {
                user_id: id
            }
        });
    }
}