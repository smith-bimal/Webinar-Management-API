import Webinar from '../models/webinar.model.js';

const getAllWebinars = async (req, res) => {
    try {
        const webinars = await Webinar.find();
        res.status(200).json({ success: true, data: webinars });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getAllActiveWebinars = async (req, res) => {
    try {
        const webinars = await Webinar.find({ status: 'active' });
        res.status(200).json({ success: true, data: webinars });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getWebinarById = async (req, res) => {
    try {
        const webinar = await Webinar.findById(req.params.id);
        if (!webinar) {
            return res.status(404).json({ success: false, error: 'Webinar not found' });
        }

        webinar.view_count++;
        webinar.save();
        res.status(200).json({ success: true, data: webinar });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const createWebinar = async (req, res) => {
    try {
        const webinar = await Webinar.create(req.body);
        res.status(201).json({ success: true, data: webinar });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

const updateWebinar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedWebinar = await Webinar.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!updatedWebinar) {
            return res.status(404).json({ message: "Webinar not found" });
        }
        res.status(200).json(updatedWebinar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteWebinar = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWebinar = await Webinar.findByIdAndDelete(id);
        if (!deletedWebinar) {
            return res.status(404).json({ message: "Webinar not found" });
        }
        res.status(200).json({ message: "Webinar deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllWebinars,
    getAllActiveWebinars,
    getWebinarById,
    createWebinar,
    updateWebinar,
    deleteWebinar
};
