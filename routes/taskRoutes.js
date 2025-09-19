const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// POST /task - Create a new task
router.post('/', taskController.createTask);

// GET /task - Get all tasks
router.get('/', taskController.getAllTasks);

// GET /task/:id - Get task by id
router.get('/:id', taskController.getTaskById);

// PUT /task/:id - Update task by id
router.put('/:id', taskController.updateTask);

// DELETE /task/:id - Delete task by id
router.delete('/:id', taskController.deleteTask);

module.exports = router;