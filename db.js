var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  'dialect': 'postgres'
});
var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
