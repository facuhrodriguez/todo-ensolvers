const { db } = require("../index");

db.sync().then(() => {
  console.log("Database synchronized");
  process.exit();
});
