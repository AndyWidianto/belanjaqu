
export default class HomePresenter {

    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async getProducts() {
        try {
            const res = await this.#model.getProducts();
            console.log(res);
            this.#view.setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    }
}