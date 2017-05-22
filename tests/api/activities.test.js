var test = require('ava')
var request = require('supertest')

var app = require('../../server')
var setupDb = require('../setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})


test.cb('getActivities gets all users activities', function (t) {
  var expected = 26
  request(app)
    .get('/activities')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
        t.is(res.body.activities.length, expected)
        t.end()
    })

})
