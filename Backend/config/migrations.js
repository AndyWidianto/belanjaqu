import connect from "./database.js";
import model from "../models/index.js";

async function migrate() {
    try {
        await connect.sync({ force: true });
        console.log("Migrations Berhasil");
    } catch (err) {
        console.log(err);
    }
}

await migrate();