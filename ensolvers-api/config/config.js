const config = require("../src/environments/config");
module.exports = {
  username: config.DB.USER,
  password: config.DB.PASS,
  database: config.DB.NAME,
  host: config.DB.HOST,
  dialect: config.DB.CLIENT,
  port: config.DB.PORT,
};
