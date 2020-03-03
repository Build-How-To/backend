
exports.up = function(knex) {
  return knex.schema.createTable('steps', steps => {
    steps.increments();

    steps.integer('step_number').notNullable();
    steps.string('description', 256).notNullable();

    steps.integer('guide_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('guides')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('steps')
};
