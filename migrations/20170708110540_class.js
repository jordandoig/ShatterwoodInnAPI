
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', function (table) {
    table.increments();
    table.string('name');
    table.string('hit_die');
    table.string('weapon_profs');
    table.string('armor_profs');
    table.string('tool_profs');
    table.string('primary_ability');
    table.boolean('str_save');
    table.boolean('dex_save');
    table.boolean('con_save');
    table.boolean('int_save');
    table.boolean('wis_save');
    table.boolean('cha_save');
    table.string('skill_options');
    table.string('prof_bonus');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('class');
};
