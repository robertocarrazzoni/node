const express = require('express')
const app = express()

const port = 5000

const rotas = require('./rotas')

const path = require('path')
const basePath = path.join(__dirname, 'template')

app.use(express.static('public'))

app.use('/rotas', rotas)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log('app funcionando')
})