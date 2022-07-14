const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pagesqty

    const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/')
    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const books = data
        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        
        const book = data[0]

        res.render('book', {book})
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', { book })
    })
})

app.post('/books/updatedbook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pagesqty

    const sql = `UPDATE books SET title = '${title}', pages = '${pageqty}' WHERE id=${id}`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM books WHERE id=${id}`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

const conn =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'nodemysql'
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }

    console.log('Conectou ao MYSQL')

    app.listen(3000)
})