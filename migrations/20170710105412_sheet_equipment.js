
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sheet_equipment', function (table) {
    table.increments();
    table.integer('sheet_id').references('id').inTable('sheet');
    table.integer('equipment_id').references('id').inTable('equipment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sheet_equipment')
};
