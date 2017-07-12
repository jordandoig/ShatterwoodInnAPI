
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dragonborn_color', function (table) {
    table.increments();
    table.string('color');
    table.string('damage_type');
    table.string('save_ability');
    table.boolean('is_line');
    table.boolean('is_cone');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dragonborn_color');
};
