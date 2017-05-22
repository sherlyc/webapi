module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  updateUser: updateUser,
  getActivities: getActivities
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

function updateUser (id, data, knex) {
  return knex('users').where('id', id)
         .update({name: data.name, email: data.email})
}

function getActivities (knex) {
  return knex('activities')
}
