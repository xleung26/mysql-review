const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

connection
  .authenticate()
  .then(() => console.log('Successfully connected to the databases'))
  .catch(err => console.log('Error establishing connection to database', err))


module.exports = connection;