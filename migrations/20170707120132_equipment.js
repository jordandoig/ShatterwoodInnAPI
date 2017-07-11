
exports.up = function(knex, Promise) {
  return knex.schema.createTable('equipment', function (table) {
    table.increments();
    table.string('name');
    table.boolean('is_weapon');
    table.boolean('is_armor');
    table.boolean('is_tool');
    table.float('weight', 5, 2);
    table.integer('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('equipment');
};
