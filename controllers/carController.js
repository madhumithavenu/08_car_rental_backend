const Car = require("../models/Car.js");

module.exports.getAllCars = async (req, res) => {
    try {
        console.log("get all cars");
        const cars = await Car.find();
        console.log(cars);
        return res.status(200).json({"cars": cars});
    }
    catch (err) {
        return res.status(400).json(err)
    }
}