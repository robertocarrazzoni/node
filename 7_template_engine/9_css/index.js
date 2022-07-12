const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender node.js...',
        coments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const post = [
        {
            title: 'Aprender node.js',
            category: 'Javascript',
            body: 'Este artigo vai te ajudar a aprender node.js...',
            coments: 4
        }, 
        {
            title: 'Aprender php',
            category: 'php',
            body: 'Este artigo vai te ajudar a aprender php...',
            coments: 4
        }, 
        {
            title: 'Aprender python',
            category: 'python',
            body: 'Este artigo vai te ajudar a aprender python',
            coments: 4
        }
    ]

    res.render('blog', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Roberto',
        surname:'Carrazzoni',
        age: 34
    }

    const palavra = 'teste'

    const auth = false

    const approved = true

    res.render('home', { user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('app funcionando')
})