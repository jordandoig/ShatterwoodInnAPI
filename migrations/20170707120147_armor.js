
exports.up = function(knex, Promise) {
  return knex.schema.createTable('armor', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('armor');
};
