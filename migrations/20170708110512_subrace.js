
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subrace', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subrace');
};
