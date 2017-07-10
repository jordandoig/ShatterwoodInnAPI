
exports.up = function(knex, Promise) {
  return knex.schema.createTable('race_spell', function (table) {
    table.increments();
    table.integer('race_id').references('id').inTable('race');
    table.integer('spell_id').references('id').inTable('spell');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('race_spell')
};
