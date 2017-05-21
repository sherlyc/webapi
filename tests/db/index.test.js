// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var db = require('../../db')
var setupDb = require('../setup-db.js')

setupDb(test)

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getUsers(t.context.db)
    .then(function (result) {
      var actual = result.length
      t.is(actual, expected)
    })
})

test('getUsers gets a single user', function (t) {
  var expected = 'Ambitious Aardvark'
  return db.getUser(99901, t.context.db)
    .then(function (result) {
      var actual = result[0].name
      t.is(actual, expected)
    })
})

test('insert user returns 27 users', function (t) {
  var expected = 27
  var data = {name: 'Posh Sherly', email: 'sherly@gg.com'}
  return db.addUser(data, t.context.db)
    .then(function (result) {
        db.getUsers(t.context.db).then(function (results){
          var actual = results.length
          t.is(actual, expected)
        })
        
    })
})
