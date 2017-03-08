const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.json({hello: 'world'})
})

router.use('/productores', require('./productores'))

router.use('/productos', require('./productos'))

router.use('/busquedas', require('./busquedas'))

module.exports = router
