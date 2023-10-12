import e from 'express';
import PropertiesAmenities from '../models/PropertiesAmenitiesModel.js';

export const getPropertiesAmenities = async (req, res) => {
    try {
        const propertiesAmenities = await PropertiesAmenities.findAll();
        res.status(200).json(propertiesAmenities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPropertiesAmenitiesById = async (req, res) => {
    try {
        const propertiesAmenities = await PropertiesAmenities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!propertiesAmenities) {
            return res.status(404).json({ message: "PropertiesAmenities not found" });
        }
        return res.status(200).json(propertiesAmenities);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPropertiesAmenities = async (req, res) => {
    const { propertyId, amenityId } = req.body;
    try {
        await PropertiesAmenities.create({
            propertyId,
            amenityId,
        });
        return res.status(201).json({ message: "PropertiesAmenities created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePropertiesAmenities = async (req, res) => {
    const { propertyId, amenityId } = req.body;
    try {
        const propertiesAmenities = await PropertiesAmenities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!propertiesAmenities) {
            return res.status(404).json({ message: "PropertiesAmenities not found" });
        }
        await PropertiesAmenities.update({
            propertyId,
            amenityId,
        }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "PropertiesAmenities updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePropertiesAmenities = async (req, res) => {
    try {
        const propertiesAmenities = await PropertiesAmenities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!propertiesAmenities) {
            return res.status(404).json({ message: "PropertiesAmenities not found" });
        }
        await PropertiesAmenities.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "PropertiesAmenities deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};





