
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subtrait', function (table) {
    table.increments();
    table.integer('subrace_id').references('id').inTable('subrace');
    table.string('name');
    table.string('desc');
    table.boolean('stat_change');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subtrait');
};
