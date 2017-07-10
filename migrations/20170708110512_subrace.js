
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subrace', function (table) {
    table.increments();
    table.integer('race_id').references('id').inTable('race');
    table.string('name');
    table.integer('str_mod');
    table.integer('dex_mod');
    table.integer('con_mod');
    table.integer('int_mod');
    table.integer('wis_mod');
    table.integer('cha_mod');
    table.string('weapon_profs');
    table.string('armor_profs');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subrace');
};
