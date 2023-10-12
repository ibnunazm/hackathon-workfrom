import Amenities from "../models/AmenitiesModel.js";

export const getAmenities = async (req, res) => {
    try {
        const amenities = await Amenities.findAll({
            attributes: { exclude: ["uuid", "createdAt", "updatedAt"] },
        }
        );
        res.status(200).json(amenities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAmenityById = async (req, res) => {
    try {
        const amenity = await Amenities.findOne({
            attributes: { exclude: ["uuid", "createdAt", "updatedAt"] },
            where: {
                id: req.params.id,
            },
        });
        if (!amenity) {
            return res.status(404).json({ message: "Amenity not found" });
        }
        return res.status(200).json(amenity);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createAmenity = async (req, res) => {
    const { optionName } = req.body;
    try {
        await Amenities.create({
            optionName,
        });
        return res.status(201).json({ message: "Amenity created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateAmenity = async (req, res) => {
    const { optionName } = req.body;
    try {
        const amenity = await Amenities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!amenity) {
            return res.status(404).json({ message: "Amenity not found" });
        }
        await Amenities.update({
            optionName,
        }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "Amenity updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteAmenity = async (req, res) => {
    try {
        const amenity = await Amenities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!amenity) {
            return res.status(404).json({ message: "Amenity not found" });
        }
        await Amenities.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "Amenity deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};