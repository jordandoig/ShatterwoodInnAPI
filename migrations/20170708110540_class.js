
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('class');
};
