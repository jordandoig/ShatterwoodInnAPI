
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subrace_spell', function (table) {
    table.increments();
    table.integer('subrace_id').references('id').inTable('subrace');
    table.integer('spell_id').references('id').inTable('spell');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('subrace_spell')
};
