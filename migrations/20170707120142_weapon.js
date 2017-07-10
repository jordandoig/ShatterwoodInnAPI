
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapon', function (table) {
    table.increments();
    table.integer('equipment_id').references('id').inTable('equipment');
    table.string('ability_mod');
    table.string('damage_die');
    table.string('damage_type');
    table.string('range');
    table.integer('magic_mod');
    table.string('magic_desc');
    table.boolean('is_ammunition');
    table.boolean('is_finesse');
    table.boolean('is_heavy');
    table.boolean('is_light');
    table.boolean('is_loading');
    table.boolean('is_range');
    table.boolean('is_reach');
    table.boolean('is_special');
    table.boolean('is_thrown');
    table.boolean('is_twohanded');
    table.boolean('is_versatile');
    table.integer('phb_page');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weapon');
};
