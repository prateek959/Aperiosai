import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, enum: ["grocery", "medicine"], required: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }

}, { timestamps: true });

const Data = mongoose.model('data', dataSchema);

export { Data };