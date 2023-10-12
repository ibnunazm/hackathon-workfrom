import Subcategories from "../models/SubcategoryModel.js";
import Categories from "../models/CategoryModel.js";

export const getSubcategories = async (req, res) => {
    try {
        const response = await Subcategories.findAll({
            attributes: { exclude: ["uuid", "createdAt", "updatedAt", "categoryId"] },
            include: [
                {
                    model: Categories,
                    attributes: { exclude: ["uuid", "createdAt", "updatedAt"] },
                },
            ],
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getSubcategoryById = async (req, res) => {
    try {
        const response = await Subcategories.findOne({
            where: {
                id: req.params.id,
            },
            attributes: { exclude: ["uuid", "createdAt", "updatedAt", "categoryId"] },
            include: [
                {
                    model: Categories,
                    attributes: { exclude: ["uuid", "createdAt", "updatedAt"] },
                },
            ],
        });
        if (!response) {
            return res.status(404).json({ message: "Subcategory not found" });
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createSubcategory = async (req, res) => {
    const { name, categoryId } = req.body;
    try {
        const category = await Categories.findOne({
            where: {
                id: categoryId,
            },
        });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await Subcategories.create({
            name,
            categoryId,
        });
        return res.status(201).json({ message: "Subcategory created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateSubcategory = async (req, res) => {
    const { name, categoryId } = req.body;
    try {
        const subcategory = await Subcategories.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }
        const category = await Categories.findOne({
            where: {
                id: categoryId,
            },
        });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await Subcategories.update({
            name,
            categoryId,
        }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "Subcategory updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteSubcategory = async (req, res) => {
    try {
        const subcategory = await Subcategories.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }
        await subcategory.destroy();
        return res.status(200).json({ message: "Subcategory deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
