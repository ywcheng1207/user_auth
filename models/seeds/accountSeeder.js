const Account = require('../account')
const db = require('../../config/mongoose')

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

db.once('open', () => {
  for (let i = 0; i < users.length; i++) {
    Account.create({
      firstName: users[i].firstName,
      email: users[i].email,
      password: users[i].password
    })
  }
  console.log('done')
})
