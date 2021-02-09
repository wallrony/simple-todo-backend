import path from 'path';
import Knex from 'knex';

require('dotenv-safe').config();

const connection = Knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    timezone: '-3',
    ssl: true
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'data', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'data', 'database', 'seeds'),
  },
  useNullAsDefault: true,
});

export default connection;
