
exports.up = function(knex, Promise) {
  return knex.schema.createTable('background', function (table) {
    table.increments();
    table.string('name');
    table.string('desc');
    table.string('alt_name');
    table.string('alt_desc');
    table.string('skill_profs');
    table.string('tool_profs');
    table.string('languages');
    table.string('suggested_personality_traits');
    table.string('suggested_ideals');
    table.string('suggested_bonds');
    table.string('suggested_flaws');
    table.string('feature_title');
    table.string('feature_desc');
    table.string('misc_title');
    table.string('misc_desc');
    table.string('misc_options');
    table.integer('phb_page');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('background');
};
