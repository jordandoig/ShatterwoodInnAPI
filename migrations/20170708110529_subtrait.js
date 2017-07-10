
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subtrait', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subtrait');
};
