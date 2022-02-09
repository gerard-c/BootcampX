const { Pool } = require('pg');

const pool = new Pool({
  user: 'gerard',
  password: '123',
  host: 'localhost',
  database: 'bootcamp'
});