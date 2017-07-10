
exports.up = function(knex, Promise) {
  return knex.schema.createTable('background', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('background');
};
