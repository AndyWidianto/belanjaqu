import { io } from "socket.io-client";

export function socket(token) {
    const socket = io("http://localhost:3000", {
        withCredentials: true
    });
    return socket;
}