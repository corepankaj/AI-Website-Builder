import { createZip } from "../utils/zipService.js";

const downloadWebsite = async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ error: "No code provided" });
        }

        createZip(res, code);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export default downloadWebsite;