
export default class updateCoverPresenter {
    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async updateCoverProfile(image, id) {
        if (!image) {
            return console.log("Berhasil update");
        }
        try {
            const formData = new FormData();
            formData.append("cover", image);
            const res = await this.#model.updateCoverProfile(formData, id);
            console.log(res);
            this.#view.navigate("/profile");
        } catch (err) {
            console.error(err);
        }
    }
    async getProfile() {
        try {
            const res = await this.#model.getProfile();
            console.log(res);
            this.#view.setProfile(res.data);
            this.#view.setPreviewCoverPicture(res.data.cover_picture);
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
}