
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dragonborn_color', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dragonborn_color');
};
