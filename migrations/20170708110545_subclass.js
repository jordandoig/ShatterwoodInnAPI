
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subclass', function (table) {
    table.increments();
    table.integer('class_id').references('id').inTable('class');
    table.string('name');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subclass');
};
