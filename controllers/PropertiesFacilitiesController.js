import PropertiesFacilities from '../models/PropertiesFacilitiesModel.js';

export const getPropertiesFacilities = async (req, res) => {
    try {
        const propertiesFacilities = await PropertiesFacilities.findAll();
        res.status(200).json(propertiesFacilities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPropertiesFacilitiesById = async (req, res) => {
    try {
        const propertiesFacilities = await PropertiesFacilities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!propertiesFacilities) {
            return res.status(404).json({ message: "PropertiesFacilities not found" });
        }
        return res.status(200).json(propertiesFacilities);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPropertiesFacilities = async (req, res) => {
    const { propertyId, facilityId } = req.body;
    try {
        await PropertiesFacilities.create({
            propertyId,
            facilityId,
        });
        return res.status(201).json({ message: "PropertiesFacilities created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePropertiesFacilities = async (req, res) => {
    const { propertyId, facilityId } = req.body;
    try {
        const propertiesFacilities = await PropertiesFacilities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!propertiesFacilities) {
            return res.status(404).json({ message: "PropertiesFacilities not found" });
        }
        await PropertiesFacilities.update({
            propertyId,
            facilityId,
        }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "PropertiesFacilities updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}; 

export const deletePropertiesFacilities = async (req, res) => {
    try {
        const propertiesFacilities = await PropertiesFacilities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!propertiesFacilities) {
            return res.status(404).json({ message: "PropertiesFacilities not found" });
        }
        await PropertiesFacilities.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "PropertiesFacilities deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



