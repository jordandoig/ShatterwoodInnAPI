
exports.up = function(knex, Promise) {
  return knex.schema.createTable('race_spell', function (table) {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('race_spell')
};
