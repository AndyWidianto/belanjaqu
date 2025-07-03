
export default class ProfilePresenter {
    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }
    
    async getProfile() {
        try {
            const res = await this.#model.getProfile();
            console.log(res);
            this.#view.setProfile(res.data);
        } catch (err) {
            console.error(err);
            if(err.status === 401) {
                this.#view.navigate("/login");
            }
        }
    }
}