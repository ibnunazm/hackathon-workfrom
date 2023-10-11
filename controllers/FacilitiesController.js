import facilities from "../models/FacilitiesModel.js";

export const getFacilities = async (req, res) => {
    try {
        const facility = await facilities.findAll();
        return res.status(200).json(facility);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getFacilityById = async (req, res) => {
    try {
        const facility = await facilities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!facility) {
            return res.status(404).json({ message: "Facility not found" });
        }
        return res.status(200).json(facility);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createFacility = async (req, res) => {
    const { name, distance } = req.body;
    try {
        await facilities.create({
            name,
            distance
        });
        return res.status(201).json({ message: "Facility created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateFacility = async (req, res) => {
    const { name, distance } = req.body;
    try {
        const facility = await facilities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!facility) {
            return res.status(404).json({ message: "Facility not found" });
        }
        await facilities.update({
            name,
            distance
        }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "Facility updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteFacility = async (req, res) => {
    try {
        const facility = await facilities.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!facility) {
            return res.status(404).json({ message: "Facility not found" });
        }
        await facility.destroy();
        return res.status(200).json({ message: "Facility deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
