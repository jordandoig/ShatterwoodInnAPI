
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tool', function (table) {
    table.increments();
    table.integer('equipment_id').references('id').inTable('equipment');
    table.string('name');
    table.string('desc');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tool');
};
