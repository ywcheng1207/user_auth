//
const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')

//
const app = express()
const port = process.env.PORT || 3000
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

//
app.get('/', (req, res) => {
  res.render('index')
})

//
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
