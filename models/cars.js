const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    name: String,
    img: String,
    stock: Number,
    MPG: Number,
    fuel_type: String,
    mileage: Number,
    features: String
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car