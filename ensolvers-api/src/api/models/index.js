const { Sequelize } = require("sequelize");
const Task = require("./task");

const config = require("../../../config/config");
const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: console.log,
});

const dbTask = new Task(db);

db.Sequelize = Sequelize;

module.exports = { db };
