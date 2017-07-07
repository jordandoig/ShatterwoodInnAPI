
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subrace_trait', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subrace_trait');
};
