//
const express = require('express')
const exphbs = require('express-handlebars')
const Account = require('./models/account')
const account = require('./models/account')
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

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  Account.findOne({ email })
    .lean()
    .then((account) => {
      if (!account) {
        res.render('index', { message: '帳號不存在' })
      }
      if (account && account.password === password) {
        res.redirect(`/welcome/${account._id}`)
      } else {
        res.render('index', { message: '密碼錯誤' })
      }
    })
    .catch((error) => console.error(error))
})

app.get('/welcome/:id', (req, res) => {
  const id = req.params.id
  Account.findById(id)
    .lean()
    .then((account) => {
      console.log(account)
      res.render('welcome', { account })
    })
    .catch((error) => console.error(error))
})

//
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
