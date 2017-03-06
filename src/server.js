const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = Promise

const app = express()
const db = mongoose.connection

db.on('error', (err) => console.log(err.message))

app.use(cors())

app.get('/', function(req, res) {
  res.json({hello: 'world'})
})

app.use('/productores', require('./productores'))

app.use('/productos', require('./productos'))

app.use('/busquedas', require('./busquedas'))

app.use(function (err, req, res, next) {
  console.log(err)
  if (err.name === 'UnauthorizedError') return res.status(401).send()
})

app.listen(7000)

console.log('Listening on http://localhost:7000')
