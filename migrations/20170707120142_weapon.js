
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapon', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weapon');
};
