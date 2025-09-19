const taskService = require('../services/taskService');

// Create a new task
const createTask = (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and cannot be empty' });
  }
  const task = taskService.createTask(title.trim());
  res.status(201).json(task);
};

// Get all tasks
const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

// Get task by id
const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = taskService.getTaskById(id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

// Update task by id
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const updates = {};
  if (title !== undefined) {
    if (title.trim() === '') {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }
    updates.title = title.trim();
  }
  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'Completed must be a boolean' });
    }
    updates.completed = completed;
  }
  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'At least one field (title or completed) must be provided' });
  }
  const task = taskService.updateTask(id, updates);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

// Delete task by id
const deleteTask = (req, res) => {
  const { id } = req.params;
  const task = taskService.deleteTask(id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ message: 'Task deleted successfully', task });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};