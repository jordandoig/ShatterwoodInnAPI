
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tool', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tool');
};
