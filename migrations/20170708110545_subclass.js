
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subclass', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subclass');
};
