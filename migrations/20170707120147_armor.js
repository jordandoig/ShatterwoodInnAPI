
exports.up = function(knex, Promise) {
  return knex.schema.createTable('armor', function (table) {
    table.increments();
    table.integer('equipment_id').references('id').inTable('equipment');
    table.string('name');
    table.integer('ac_bonus');
    table.integer('magic_mod');
    table.string('magic_desc');
    table.boolean('is_light');
    table.boolean('is_medium');
    table.boolean('is_heavy');
    table.boolean('is_shield');
    table.boolean('add_dex');
    table.integer('str_req');
    table.boolean('stealth_disadvantage');
    table.integer('phb_page');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('armor');
};
