const { Sequelize } = require("sequelize");

const config = require("../../db/config");

const db = new Sequelize(
  config.connection.database,
  config.connection.user,
  config.connection.password,
  {
    host: config.connection.host,
    dialect: config.client,
    logging: true,
  }
);

module.exports = { db, authenticate };
