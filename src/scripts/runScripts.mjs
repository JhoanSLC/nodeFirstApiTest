import fs from "fs";
import path from "path";
import { conection } from "../utils/dbConection.mjs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function runScripts() {
  try {
    // Verifica que las rutas de los archivos existan
    const schemaFilePath = path.join(__dirname, "../migrations/schema.sql");
    const dataFilePath = path.join(__dirname, "../migrations/data.sql");

    // Verifica si los archivos existen antes de intentar leerlos
    if (!fs.existsSync(schemaFilePath)) {
      throw new Error(`Schema file not found: ${schemaFilePath}`);
    }

    if (!fs.existsSync(dataFilePath)) {
      throw new Error(`Data file not found: ${dataFilePath}`);
    }

    // Leer y ejecutar el archivo data.sql
    const dataSql = fs.readFileSync(dataFilePath, "utf-8");
    await conection.query(dataSql);
    console.log("Import data successfully!");
  } catch (err) {
    console.error("Error during SQL scripts execution: ", err);
  }
}
