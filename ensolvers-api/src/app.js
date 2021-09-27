const express = require("express");
class App {
  constructor(expressApp) {
    expressApp.use(express.json());
  }
}

module.exports = App;
