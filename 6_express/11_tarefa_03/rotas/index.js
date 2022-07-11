const express = require('express')
const route = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../template')

route.get('/novapag', (req, res) => {
    res.sendFile(`${basePath}/novapag.html`)
})

module.exports = route