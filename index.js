const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/checkout', (req, res) => res.render('pages/checkout'))
  .get('/payment', (req, res) => res.render('pages/payment'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/register', (req, res) => res.render('pages/register'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
