
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

    async createMessage(partner, user, messages, message) {
        if (message === '') return;
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
        this.#view.socket.emit("private_message", {
            to: partner?.user_id,
            message: data
        });
        await this.getLastMessage();
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
                timeMessage = dateCreate.toLocaleDateString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                })
            }
        }
        return timeMessage;
    }

    HandleAddListener(refDropDownSetup, refDropDownPaperClip, refShowEmojiPicker, refEmojiPicker) {

        const handleClickOutside = (e) => {
            if (refDropDownSetup.current && !refDropDownSetup.current.contains(e.target)) {
                this.#view.setOpenDropDownSetup(false);
            }
            if (refDropDownPaperClip.current && !refDropDownPaperClip.current.contains(e.target)) {
                this.#view.setOpenDropdownPaperClip(false);
            }
            if (refShowEmojiPicker.current && !refShowEmojiPicker.current.contains(e.target)) {
                this.#view.setOpenEmojiPicker(false);
            }
        }

        const handleEmojiClick = (e) => {
            this.#view.setMessage((prev) => prev + e.detail.unicode);
            console.log(e.detail.unicode);
        }

        if (refEmojiPicker.current) {
            refEmojiPicker.current.addEventListener("emoji-click", handleEmojiClick);
        }

        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleClickOutside, true);
        return () => {
            refEmojiPicker.current.removeEventListener('emoji-click', handleEmojiClick);
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleClickOutside);
        }
    }
}