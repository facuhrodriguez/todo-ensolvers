const express = require("express");
const server = express();
const config = require("./environments/config");
const App = require("./app");
const { db, authenticate } = require("../src/api/models/index");
const application = new App(server);
// server.use(application);

server.listen(config.PORT, async () => {
  console.log("Server listening on port", config.PORT);
  console.log("config", config);
  await authenticate();
});
