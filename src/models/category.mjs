import { Sequelize, DataTypes } from "sequelize";
import { conection } from "../utils/dbConection.mjs";

export const Category = conection.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 80],
      },
    },
  },
  {
    timestamps: false,
    tableName: "category",
  }
);
