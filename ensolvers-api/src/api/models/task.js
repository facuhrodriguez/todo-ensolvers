const { DataTypes } = require("sequelize");

class Task {
  #task;
  constructor(db) {
    this.#defineTask(db);
  }

  #defineTask(db) {
    this.#task = db.define("Task", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
      },
      description: {
        type: DataTypes.STRING(100),
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  }

  getTask() {
    return this.#task;
  }
}

module.exports = Task;
