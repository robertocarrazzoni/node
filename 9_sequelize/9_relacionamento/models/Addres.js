const { DataTypes} = require('sequelize')

const db = require('../db/conn')

const  User = require('./User')

const Addres = db.define('Addres', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    },
})
Addres.belongsTo(User)
module.exports = Addres