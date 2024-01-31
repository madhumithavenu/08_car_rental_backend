const carModel = require("../models/carModel.js");

module.exports.getAllCars = async (req, res) => {
    try {
        const cars = await carModel.find()
        res.send(cars);
    }
    catch (err) {
        return res.status(400).json(err)
    }
}