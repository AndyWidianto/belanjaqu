
export default class CategoriesPresenter {
    
    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async getCategories() {
        try {
            const res = await this.#model.getCategories();
            console.log(res.data);
            return this.#view.setCategories(res.data);
        } catch (err) {
            console.error(err);
        }
    }
}