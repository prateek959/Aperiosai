import mongoose from "mongoose";

const db = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB Connected Successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


export { db };