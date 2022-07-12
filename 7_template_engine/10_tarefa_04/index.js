const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: 'views/partials'
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [
    {
        nome: 'sapato',
        preco: 200,
        unidades: 10,
        id: 0
    },
    {
        nome: 'blusa',
        preco: 40,
        unidades: 5,
        id: 1
    },
    {
        nome: 'bermuda',
        preco: 120,
        unidades: 9,
        id: 2
    }
]

app.get('/', (req, res) => {
    

    res.render('home', {produtos})
})

app.get('/produtos/:id', (req, res) => {
    
    const produto = produtos[req.params.id]

    res.render('produto', {produto})
})

app.listen(3000, () => {
    console.log('app funcionando')
})