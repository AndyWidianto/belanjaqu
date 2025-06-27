import model from "../models/index.js";

export default class CategoiresService {

    static async getCategories() {
        return await model.categories.findAll();
    }
    static async updateCategori() {
        
    }
}