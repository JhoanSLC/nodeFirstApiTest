import { Category } from "../models/category.mjs";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll(); // Se hace uso de un método integrado en sequelize para obtener todos los datos de la tabla Category
    res.json(categories); // Se responde con un json que devuelve todos los datos que se obtuvieron
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching categories", details: error });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body; // Se obtiene solo el nombre del cuerpo de la request pues es el único dato que se necesita para crear la categoría
    const newCategory = await Category.create({ name }); // Se hace uso de un método de sequelize para insertar datos a la tabla categoría pasandole el nombre.
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ error: "Error creating category", details: err });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const products = await category.getProdcuts();
    if (products.length > 0) {
      return res
        .status(400)
        .json({ error: "Cannot delete category with associated products" });
    }

    await category.destroy();
    res.json({ message: "Category deleted succesfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting category", details: err });
  }
};
