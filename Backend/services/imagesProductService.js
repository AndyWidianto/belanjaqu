import model from "../models/index.js";

export default class ImagesProductService {

    static async createImages(image, id) {
        return await model.images_product.create({
            product_id: id,
            image: image
        });
    }
    static async updateImages(image, id) {
        return await model.images_product.update({
            image: image,
        }, {
            where: {
                image_id: id
            }
        })
    }
}