
exports.up = function(knex, Promise) {
  return knex.schema.createTable('equipment', function (table) {
    table.increments();
    table.string('name');
    table.boolean('is_weapon');
    table.boolean('is_armor');
    table.boolean('is_tool');
    table.float('weight', 6, 3);
    table.float('price', 9, 1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('equipment');
};
