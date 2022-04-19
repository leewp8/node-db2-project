exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 17).notNullable().unique();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.numeric('mileage').unsigned().notNullable();
    tbl.string('title')
    tbl.string('transmission')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};
