import express from 'express';
import cors from 'cors';
import routes from './router/index.js';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { handleSocet } from './untils/socket.js';
import { ErrorHandler } from './errors/ErrorHandler.js';


const app = express();
const server = new createServer(app);

function boostrap() {
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
    app.use("/api", routes);
    app.use(ErrorHandler);

    server.listen(3000, () => console.log(`Server berjalan di http://localhost:3000`));
}

boostrap();