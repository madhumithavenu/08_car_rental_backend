const dotenv = require('dotenv');
const express = require('express');
const  mongoose = require('mongoose');
const cors = require('cors');
const carsRouter = require('./routes/carsRoute.js');

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/cars',carsRouter);


app.get('/', (req, res) => res.send('Hello world'));

dotenv.config();
mongoose.connect(`mongodb+srv://madhu:${process.env.PASSWORD}@cluster0.sqb10q8.mongodb.net/cars`)
    .then(app.listen(process.env.PORT))
    .then(() => { console.log(`DB Connect & App Started at ${process.env.PORT}`) });

