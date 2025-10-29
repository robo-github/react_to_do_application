const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

// POST new todo
router.post("/", async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  await todo.save();
  res.json(todo);
});

// PATCH toggle todo
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(todo);
});

// DELETE todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
