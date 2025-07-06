import model from "../models/index.js";

export default class SizeService {

    static async createSize(data) {
        const createSize = await model.sizes.create(data);
        return createSize;
    }
}