const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    fuelType: { type: String, required: true },
    bookedSlots: [
        {
            from: { type: String, required: true },
            to: { type: String, required: true }
        }
    ],
    rentPerHour: { type: Number, required: true }

}, { timestamps: true }
);

module.exports = mongoose.model('Car', carSchema);
