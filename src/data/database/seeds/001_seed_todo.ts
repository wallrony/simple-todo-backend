import Knex from 'knex';
import ITODO from '../../../domain/models/ITODO';

export async function seed(knex: Knex) {
  const todoList: ITODO[] = [];

  todoList.push({
    title: 'Varrer a casa',
    date: '2021-01-08',
  });

  todoList.push({
    title: 'Lavar os pratos',
    date: '2021-01-08',
  });

  todoList.push({
    title: 'Fazer exercícios',
    date: '2021-01-09',
  });

  return await knex('todo').insert(todoList);
}
