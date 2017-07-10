
exports.up = function(knex, Promise) {
  return knex.schema.createTable('race', function (table) {
    table.increments();
    table.integer('dragonborn_color_id').references('id').inTable('drdragonborn_color');
    table.string('name');
    table.string('skills');
    table.integer('str_mod');
    table.integer('dex_mod');
    table.integer('con_mod');
    table.integer('int_mod');
    table.integer('wis_mod');
    table.integer('cha_mod');
    table.integer('age_min');
    table.integer('age_max');
    table.string('size');
    table.integer('speed');
    table.string('alignments');
    table.string('languages');
    table.string('weapon_profs');
    table.string('armor_profs');
    table.string('tool_profs');
    table.string('names_male');
    table.string('names_female');
    table.string('names_family_title');
    table.string('names_family');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('race');
};
