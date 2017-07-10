
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spell', function (table) {
    table.increments();
    table.string('name');
    table.integer('level');
    table.string('casting_time');
    table.string('range');
    table.string('components');
    table.string('duration');
    table.string('school');
    table.string('target');
    table.string('area_of_effect');
    table.integer('phb_page');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spell');
};
