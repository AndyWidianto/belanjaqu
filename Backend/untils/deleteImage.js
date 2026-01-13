import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export async function deleteImage(filename) {
  if (!filename) return;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "public/uploads/", filename);

  try {
    await fs.unlink(filePath);
    console.log("Image deleted:", filename);
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
}
