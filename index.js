const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')

const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('static')
})

app.get('/dyno', (req, res) => {
    res.render('dynamic', { text: "this is a test" })
})

app.listen(port, () => {
    console.log('App is running')
})
