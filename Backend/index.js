import express from 'express';
import cors from 'cors';
import connect from "./config/database.js";
import routes from './router/index.js';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { handleSocet } from './untils/socket.js';


const app = express();
const server = new createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// melakukan handle socket
handleSocet(io);
// Resfull API
app.use(routes);

// connect database
connect.sync({ })
    .then(() => console.log("database berhasil berjalan"))
    .catch((err) => console.log("gagal connect" + err));

server.listen(3000, () => console.log(`Server berjalan di http://localhost:3000`));