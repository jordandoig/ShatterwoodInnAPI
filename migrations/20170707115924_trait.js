
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trait', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trait');
};
