import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import { runScripts } from "./src/scripts/runScripts.mjs";
import { PORT } from "./src/config.mjs";
import { conection } from "./src/utils/dbConection.mjs";

import "./src/models/category.mjs";
import "./src/models/product.mjs";

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
  try {
    // Sincroniza las tablas en la base de datos
    console.log("Synchronizing database...");
    await conection.sync({ force: true }); // Usa `{ force: true }` solo en desarrollo para reiniciar tablas
    console.log("Database synchronized.");

    // Ejecuta los scripts de inserción de datos
    await runScripts();

    // Inicia el servidor
    app.listen(PORT, () => {
      console.log(`Server running on: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error during initialization:", err);
  }
})();
