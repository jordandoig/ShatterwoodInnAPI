
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sheet_spell', function (table) {
    table.increments();
    table.integer('sheet_id').references('id').inTable('sheet');
    table.integer('spell_id').references('id').inTable('spell');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('sheet_spell')
};
