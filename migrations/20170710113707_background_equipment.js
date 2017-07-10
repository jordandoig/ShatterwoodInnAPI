
exports.up = function(knex, Promise) {
  return knex.schema.createTable('background_equipment', function (table) {
    table.increments();
    table.integer('background_id').references('id').inTable('background');
    table.integer('equipment_id').references('id').inTable('equipment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('background_equipment')
};
