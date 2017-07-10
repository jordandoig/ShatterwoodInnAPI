
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sheet', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sheet');
};
