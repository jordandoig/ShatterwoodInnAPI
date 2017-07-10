
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subfeature', function (table) {
    table.increments();
    table.integer('subclass_id').references('id').inTable('subclass');
    table.string('name');
    table.string('desc');
    table.boolean('stat_change');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subfeature');
};
