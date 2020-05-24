const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    name: String,
    img: String,
    stock: Number,
    mpg: Number,
    fuel_type: String,
    mileage: Number,
    transmission: String,
    features: String
})

const Car = mongoose.model('car', carSchema)

module.exports = Car