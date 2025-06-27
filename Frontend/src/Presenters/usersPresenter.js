
export default class usersPresenter {

    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async Login(username, password) {
        this.#view.setLoading(true);

        try {
            const res = await this.#model.Login(username, password);
            localStorage.setItem("token", res.token);
            alert("Login berhasil");
            this.#view.navigate("/");
            this.#view.setResponseMessage({ status: "success", message: "Berhasil Login"});
        } catch (err) {
            this.#view.setResponseMessage({ status: "fail", message: err.response.data.message})
            console.error("Terjadi error:", err);
        }
        finally {
            this.#view.setLoading(false);
        }
    }
}