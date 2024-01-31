const dotenv = require('dotenv');
const express = require('express');
const  mongoose = require('mongoose');
const app = express()



app.get('/', (req, res) => res.send('Hello world'))

dotenv.config();

mongoose.connect(`mongodb+srv://madhu:${process.env.PASSWORD}@cluster0.sqb10q8.mongodb.net/cars?retryWrites=true&w=majority`)
    .then(app.listen(process.env.PORT))
    .then(() => { console.log(`DB Connect & App Started at ${process.env.PORT}`) });