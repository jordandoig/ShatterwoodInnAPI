
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class_equipment', function (table) {
    table.increments();
    table.integer('class_id').references('id').inTable('class');
    table.integer('equipment_id').references('id').inTable('equipment');
    table.integer('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('class_equipment')
};
