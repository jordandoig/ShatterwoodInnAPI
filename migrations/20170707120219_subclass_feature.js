
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subclass_feature', function (table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subclass_feature');
};
