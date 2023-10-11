import Categories from "../models/CategoryModel.js";
import Subcategories from "../models/SubcategoryModel.js";

export const getCategories = async (req, res) => {
    try {
        const response = await Categories.findAll({
            include: [
                {
                    model: Subcategories,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const response = await Categories.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: Subcategories,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
        });
        if (!response) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        await Categories.create({
            name
        });
        return res.status(201).json({ message: "Category created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await Categories.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        category.name = name;
        await category.save();
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await Categories.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await category.destroy();
        return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
