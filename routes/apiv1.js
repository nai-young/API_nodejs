const express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('APIv1')
})

module.exports = router
