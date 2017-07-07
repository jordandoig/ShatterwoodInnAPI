
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spell', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spell');
};
