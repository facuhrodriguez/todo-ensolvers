class TaskRepository {
  constructor(model) {
    this.taskModel = model;
  }

  async findAll(query) {
    try {
      const tasks = await this.taskModel.findAll({ where: query });
      return tasks;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async insert(task) {
    try {
      await this.taskModel.create(task);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = TaskRepository;
