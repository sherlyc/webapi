module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser
}

function getUsers (knex) {
  return knex('users').select()
}

function getUser (id, knex) {
  return knex('users').where('id', id)
}

function addUser (data, knex) {
  return knex('users').insert({name: data.name,
                               email: data.email
                      })
}
