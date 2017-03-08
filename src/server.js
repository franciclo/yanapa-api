const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = Promise

const app = express()
const db = mongoose.connection

db.on('error', (err) => console.log('mongoose connection error: ' + err.message))

app.use('/api', cors(), require('./routes'))

app.use(function (err, req, res, next) {
  console.log(err)
  if (err.name === 'UnauthorizedError') return res.status(401).send()
})

app.listen(3000)

console.log('Listening on http://localhost:3000')
