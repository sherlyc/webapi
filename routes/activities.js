var express = require('express')
var router = express.Router()

var db = require('../db')

router.get ('/', function (req, res) {
  db.getActivities(req.app.get('knex'))
    .then(function (activities) {
      res.send({ activities: activities })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})




module.exports = router
