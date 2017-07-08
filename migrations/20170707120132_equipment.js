
exports.up = function(knex, Promise) {
  return knex.schema.createTable('equipment', function (table) {
    table.increments();
    table.string('name');
    table.boolean('is_weapon');
    table.boolean('is_armor');
    table.integer('weight');
    table.integer('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('equipment');
};
