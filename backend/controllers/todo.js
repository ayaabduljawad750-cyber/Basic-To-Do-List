import Todo from"../models/todo.js";

// GET all todos
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// ADD new todo
export const addToDo = async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  });

  await newTodo.save();
  res.json(newTodo);
};
