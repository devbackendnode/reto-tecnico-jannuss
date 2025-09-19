const { randomUUID } = require('crypto');
const Task = require('../models/Task');

let tasks = []; // In-memory storage

class TaskService {
  // Create a new task
  createTask(title) {
    const id = randomUUID();
    const task = new Task(id, title);
    tasks.push(task);
    return task;
  }

  // Get all tasks
  getAllTasks() {
    return tasks;
  }

  // Get task by id
  getTaskById(id) {
    return tasks.find(task => task.id === id);
  }

  // Update task by id
  updateTask(id, updates) {
    const task = this.getTaskById(id);
    if (task) {
      if (updates.title !== undefined) {
        task.title = updates.title;
      }
      if (updates.completed !== undefined) {
        task.completed = updates.completed;
      }
      return task;
    }
    return null;
  }

  // Delete task by id
  deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      const deletedTask = tasks.splice(index, 1)[0];
      return deletedTask;
    }
    return null;
  }
}

module.exports = new TaskService();