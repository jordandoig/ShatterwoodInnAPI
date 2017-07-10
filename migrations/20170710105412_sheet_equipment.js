
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sheet_equipment', function (table) {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sheet_equipment')
};
