
exports.up = function(knex) {
  return knex.schema.createTable('reviews', reviews => {
    reviews.increments();

    reviews.string('review', 256).notNullable();

    reviews.integer('guide_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('guides')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    reviews.integer('author_user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('reviews')
};
