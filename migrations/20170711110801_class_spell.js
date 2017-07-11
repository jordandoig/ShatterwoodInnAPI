
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class_spell', function (table) {
    table.increments();
    table.integer('class_id').references('id').inTable('class');
    table.integer('spell_id').references('id').inTable('spell');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('class_spell')
};
