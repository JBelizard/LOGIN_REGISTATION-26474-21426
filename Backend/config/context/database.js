import Sequelize from 'sequelize';

const database = new Sequelize({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'Users',
  dialect: 'mysql', //mysql, postgres, sqlite, mariadb and mssql,
});

export { database };


