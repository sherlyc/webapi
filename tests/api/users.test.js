// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')

var app = require('../../server')
var setupDb = require('../setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})

// test.cb('getUsers gets all users', function (t) {
//   var expected = 26
//   request(app)
//     .get('/users')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end(function (err, res) {
//       if (err) throw err
//       t.is(res.body.users.length, expected)
//       t.end()
//     })
// })

test.cb('getUser gets a single user', function (t) {
  var expected = 'Generous Gila Monster'
  request(app)
    .get('/users/99907')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.user[0].name, expected)
      t.end()
    })
})

test.cb('is addUser working?', function (t) {
  var expected = 99927
  let data = {name:'something', email:'something@email.com'}
  request(app)
    .post('/users/add')
    .send({data})
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.user_id, expected)
      t.end()
    })
})
