
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.string('frequency').notNull().defaultTo('Weekly')
    table.integer('level').notNull().defaultTo(1)
})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities')
}
