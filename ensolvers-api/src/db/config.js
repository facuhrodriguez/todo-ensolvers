const config = require("../environments/config");

module.exports = {
  client: config.DB.CLIENT,
  connection: {
    host: config.DB.HOST,
    port: config.DB.PORT,
    user: config.DB.USER,
    password: config.DB.PASS,
    database: config.DB.NAME,
  },
};
