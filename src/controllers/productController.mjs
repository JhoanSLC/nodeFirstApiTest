import { Product } from "../models/product.mjs";
import { Category } from "../models/category.mjs";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products", details: error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, { include: Category });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product", details: error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      categoryId,
    });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: "Error creating product", details: err });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, categoryId } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res
        .status(404)
        .json({ error: "Trying to update product with an invalid categoryId" });
    }

    await product.update({ name, description, price, categoryId });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: "Error updating product", details: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();
    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product", details: error });
  }
};
