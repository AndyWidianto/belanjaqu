
export default class ChattingPresenter {

    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async getMessages(name) {
        try {
            const res = await this.#model.getMessages(name);
            console.log(res);
            this.#view.setMessages(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    async getLastMessage() {
        try {
            const res = await this.#model.getLastMessage();
            console.log(res);
            this.#view.setUserLastMessages(res.data);
            this.#view.setCopyLastMessages(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    async getPartnerUser(name) {
        try {
            const res = await this.#model.getUserFromUsername(name);
            console.log(res);
            this.#view.setPartnerUser(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    async getUserFromCookie() {
        try {
            const res = await this.#model.getUserFromCookie();
            console.log(res);
            this.#view.setUser(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    async createMessage(partner, user, messages, message, userMessage) {
        if (!partner) return;
        const date = new Date();
        const data = {
            partnerId: partner?.user_id,
            sender_id: user.id,
            receiver_id: partner?.user_id,
            content: message,
            createdAt: date.toISOString(),
            updatedAt: date.toISOString()
        }
        this.#view.setMessages([...messages, data]);
        await this.#view.socket.emit("private_message", {
            to: partner?.user_id,
            message: data
        });
        this.getLastMessage();
        this.#view.setMessage('');
    }
    parseCreatedAt(createdAt) {
        const dateCreate = new Date(createdAt)
        const date = dateCreate.getTime();
        const dateNow = Date.now();
        let time = (dateNow - date) / (1000);
        let timeMessage = `${parseInt(time + 1)}s`;
        if (time > 60) {
            time = time / 60;
            timeMessage = `${parseInt(time)}m`;
            if (time > 60) {
                timeMessage = dateCreate.toLocaleDateString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                })
            }
        }
        return timeMessage;
    }
}