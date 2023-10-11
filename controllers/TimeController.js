import Time from "../models/TimeModel.js";

export const getTime = async (req, res) => {
    try {
        const time = await Time.findAll();
        return res.status(200).json(time);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTimeById = async (req, res) => {
    try {
        const time = await Time.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!time) {
            return res.status(404).json({ message: "Time not found" });
        }
        return res.status(200).json(time);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTime = async (req, res) => {
    const { name } = req.body;
    try {
        await Time.create({
            name
        });
        return res.status(201).json({ message: "Time created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTime = async (req, res) => {
    const { name } = req.body;
    try {
        const time = await Time.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!time) {
            return res.status(404).json({ message: "Time not found" });
        }
        await Time.update({
            name
        }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "Time updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTime = async (req, res) => {
    try {
        const time = await Time.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!time) {
            return res.status(404).json({ message: "Time not found" });
        }
        await Time.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ message: "Time deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};