
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subclass_spell', function (table) {
    table.increments();
    table.integer('subclass_id').references('id').inTable('subclass');
    table.integer('spell_id').references('id').inTable('spell');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subclass_spell')
};
