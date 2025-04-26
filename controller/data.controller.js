import { Data } from "../models/data.model.js";

const searchRetailer = async (req, res) => {
    try {
        const { name, category, lat, lng, page, limit } = req.query;
        let obj = {};
        if (name) {
            obj.name = name;
        }

        if (category) {
            obj.category = category;
        }
        if (lat) {
            obj.latitude = lat;
        }
        if (lng) {
            obj.longitude = lng;
        }
        let skip = page || 0;
        let lim = limit || 20;
        console.log(obj);
        const data = await Data.find(obj).skip(skip).limit(lim);
        res.status(200).json(data);
    } catch (error) {
        // console.log(error.message);
        res.status(500).json({ msg: "Internal Server error" });
    }
};

const retailerById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Data.findById(id);
        if (!data) {
            return res.status(400).json({ msg: "ID Invalid" });
        }
        res.status(200).json(data);
    } catch (error) {
        // console.log(error.message);
        res.status(500).json({ msg: "Internal Server error" });
    }
}


const addRetailers = async (req, res) => {
    try {
        const { name, category, phoneNumber, address, latitude, longitude } = req.body;
        if (!name || !category || !phoneNumber || !address) {
            return res.status(400).json({ msg: "Missing required fields" });
        }
        const data = await Data.findOne({ name });
        if (data) {
            return res.status(400).json({ msg: "Data is already exists" });
        }
        await Data.create({
            name,
            category,
            phoneNumber,
            address,
            latitude,
            longitude
        });
        res.status(201).json({ msg: "Add data successfully" });
    } catch (error) {
        // console.log(error.message);
        res.status(500).json({ msg: "Internal Server error"});
    }
};

export { searchRetailer, retailerById, addRetailers };
