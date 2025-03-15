const express = require("express");

const todoRoutes = express.Router()

todoRoutes.post("/addTodo", verifyToken, todoCon.addTodo);

todoRoutes.post("/completeTodo", verifyToken, todoCon.completeTodo);

todoRoutes.get("/showTodo", verifyToken, todoCon.showTodo);

todoRoutes.get("/all-todo", verifyToken, todoCon.allTodo);

todoRoutes.put("/updateTodo", verifyToken, todoCon.updateTodo);

todoRoutes.delete("/deleteTodo", verifyToken, todoCon.deleteTodo);

module.exports = todoRoutes