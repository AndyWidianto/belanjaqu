import jwt from "jsonwebtoken";
import cookie from "cookie";
import MessagesService from "../services/MessagesService.js";

const cache = new Map();

export function handleSocet(io) {
    io.use((socket, next) => {
        const rawCookie = socket.handshake.headers.cookie;
        try {
            const cookies = cookie.parse(rawCookie);
            const verifyToken = jwt.verify(cookies.token, process.env.SECRET_JWT);
            socket.userId = verifyToken.id;
            next();
        } catch (err) {
            console.error(err);
        }
    })
    io.on("connection", (socket) => {
        const user = socket.userId;
        cache.set(user, socket.id);
        console.log(`user id ${user} telah login id socket:`, cache.get(user))

        socket.on("private_message", async ({ to, message }) => {
            try {
                const target = cache.get(to);
                if (target) {
                    console.log("ini pesannya:", message);
                    io.to(target).emit("private_message", {
                        from: user,
                        message: message
                    });
                }
                await MessagesService.createMessage(message);
            } catch (err) {
                console.error(err);
            }
        });
        socket.on("disconnect", () => {
            cache.forEach((id, key) => {
                if (id === socket.id) cache.delete(key);
            });
            console.log("User telah Logout", cache.get(user));
        });
    })
}