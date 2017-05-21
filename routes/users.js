var express = require('express')
var router = express.Router()

var db = require('../db')

router.get ('/', function (req, res) {
  db.getUsers(req.app.get('knex'))
    .then(function (users) {
      res.send({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get ('/user/:id', function (req, res) {
  res.send('HI')
  // let id = req.params.id
  // console.log(id)
  // db.getUser(id, req.app.get('knex'))
  //   .then(function (user) {
  //     console.log ({user})
  //     res.send({user: user})
  //   })
  //   .catch(function (err) {
  //     res.status(500).send('DATABASE ERROR:' + err.message)
  //   })
})

module.exports = router
