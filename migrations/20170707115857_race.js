
exports.up = function(knex, Promise) {
  return knex.schema.createTable('race', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('race');
};
