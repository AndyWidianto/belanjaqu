import axios from "axios";

export default class data {
    instance;

    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_SERVER,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    async getCookie() {
        const res = await this.instance.get('/cookie', {
            withCredentials: true
        })
        return res.data;
    }
    async Login(username, password) {
        const res = await this.instance.post('/login', {
            username: username,
            password: password
        }, {
            withCredentials: "include"
        });

        return res.data;
    }

    async Register(username, email, password) {
        const res = await this.instance.post('/register', {
            username: username,
            email: email,
            password: password
        }, {
            withCredentials: true
        });

        return res.data;
    }

    async getUser(id) {
        const user = await this.instance.get(`/user/${id}`);
        return user.data;
    }
    async getUserFromCookie() {
        const user = await this.instance.get('/parse/cookie', {
            withCredentials: true
        });
        return user.data;
    }

    async getUserFromUsername(name) {
        const user = await this.instance.get(`/users?username=${name}`);
        return user.data;
    }

    async getMessages(name) {
        const messages = await this.instance.get(`/messages/${name}`, {
            withCredentials: true
        });
        return messages.data;
    }
    async getLastMessage() {
        const ListMessage = await this.instance.get('/daftar/messages', {
            withCredentials: true
        });
        return ListMessage.data;
    }
    async getProducts() {
        const products = await this.instance.get('/products');
        return products.data;
    }
    async getCategories() {
        const categories = await this.instance.get('/categories');
        return categories.data;
    }
    async getProfile() {
        const profile = await this.instance.get('/profile', {
            withCredentials: true
        });
        return profile.data;
    }
    async updateCoverProfile(data, id) {
        const profile = await this.instance.put(`/profile/cover/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return profile.data;
    }
}
