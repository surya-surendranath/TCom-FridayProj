exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id')
    table.string('name')
    table.string('fav_color')
    table.string('fb_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}