
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subrace_spell', function (table) {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('subrace_spell')
};
