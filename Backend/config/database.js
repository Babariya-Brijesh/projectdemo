const { createPool } = require("mysql");
const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'project',
  MULTIPLESTATEMENTS: true
});
module.exports = pool;
