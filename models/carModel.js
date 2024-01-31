const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    Feultype: { type: String, required: true },
    bookedSlots: [
        {
            from: { type: String, required: true },
            to: { type: String, required: true }
        }
    ],
    rentPerHour: { type: Number, required: true }

}, { timestamps: true }
)

const carModel = mongoose.model('Cars', carSchema)
module.exports = carModel;