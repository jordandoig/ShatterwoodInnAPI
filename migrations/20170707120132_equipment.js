
exports.up = function(knex, Promise) {
  return knex.schema.createTable('equipment', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('equipment');
};
