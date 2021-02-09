import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('todo', table => {
    table.increments('id').primary();
    table.string('title', 60).notNullable();
    table.text('description').nullable();
    table.date('date').notNullable();
    
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('todo');
}
