
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subfeature', function (table) {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subfeature');
};
