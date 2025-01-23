import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME,
  DB_PORT,
} from "../config.mjs";

export const conection = new Sequelize({
  host: DB_HOST,
  dialect: "postgres",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  logging: console.log,
});

conection
  .authenticate()
  .then(() => console.log("Database connected succesfully!"))
  .catch((err) => console.log(`Unable to connect to the database: ${err}`));
