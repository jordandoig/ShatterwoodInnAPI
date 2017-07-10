
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feature', function (table) {
    table.increments();
    table.integer('class_id').references('id').inTable('class');
    table.string('name');
    table.string('desc');
    table.boolean('stat_change');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feature');
};
