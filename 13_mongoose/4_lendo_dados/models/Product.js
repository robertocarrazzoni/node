const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Product = mongoose.model(
    'product',
    new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true}
    })
)

module.exports = Product