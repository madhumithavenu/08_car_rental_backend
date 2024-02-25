const express = require('express');
const { getAllCars } = require('../controllers/carController.js');

const carsRouter = express.Router();

carsRouter.get("/getallcars",getAllCars )

module.exports = carsRouter;