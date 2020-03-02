
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
    users.string('email', 128).notNullable();
    users.string('first_name', 128).notNullable();
    users.string('last_name', 128).notNullable()
  })
  .createTable('guides', tbl => {
    tbl.increments();

    tbl.text('title', 128).unique().notNullable();
    tbl.text('description', 128).notNullable();
    tbl.text('category', 128).notNullable();
    tbl.text('difficulty', 128).notNullable();

    tbl.integer('creator_user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('guides')
};
