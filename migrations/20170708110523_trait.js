
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trait', function (table) {
    table.increments();
    table.integer('race_id').references('id').inTable('race');
    table.string('name');
    table.string('desc');
    table.boolean('stat_change');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trait');
};
