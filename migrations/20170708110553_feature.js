
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feature', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feature');
};
