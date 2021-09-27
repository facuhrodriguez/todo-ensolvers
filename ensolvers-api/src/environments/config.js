const dotenv = require("dotenv");

dotenv.config({ path: `../.env` });
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  LOGGER_PATH: process.env.LOGGER_PATH,
  DB: {
    CLIENT: process.env.DB_CLIENT,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    SCHEMA: process.env.DB_SCHEMA,
  },
};
