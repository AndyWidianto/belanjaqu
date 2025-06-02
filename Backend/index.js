import express from 'express';
import cors from 'cors';
import connect from "./config/database.js";
import routes from './router/index.js';


const app = express();
app.use(express.json())
app.use(cors());

app.use(routes);

connect.sync({ force: false })
.then(() => console.log("database berhasil berjalan"))
.catch((err) => console.log("gagal connect" + err));

app.listen(6000, () => console.log(`Server berjalan di http://localhost:6000`));