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

router.get ('/:id', function (req, res) {
  let id = req.params.id
  db.getUser(id, req.app.get('knex'))
    .then(function (user) {
      res.send({user: user})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.post('/add', function (req, res) {
  let data = req.body.data
  db.addUser(data, req.app.get('knex'))
    .then(function (result) {
      res.status(201).json({user_id: result[0]})

    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.post('/update/:id', function (req, res) {
  let id = req.params.id
  let data = req.body.data
  db.updateUser(id, data, req.app.get('knex'))
    .then(function (result) {
      console.log(result)
      res.status(201).json({updated: result[0]})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = router
