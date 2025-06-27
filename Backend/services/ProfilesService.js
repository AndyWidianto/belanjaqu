import model from "../models/index.js";

export default class ProfileService {

    static async updateProfile(data, id) {
        return await model.profiles.update(data, {
            where: {
                user_id: id
            }
        })
    }
}