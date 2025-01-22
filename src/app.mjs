import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { PORT } from "./config.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
