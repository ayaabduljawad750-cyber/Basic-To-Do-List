import express from "express";
import { getTodos, addToDo } from "../controllers/todo.js";

const todoRoute = express.Router();

// GET all todos
todoRoute.get("/", getTodos);

// ADD new todo
todoRoute.post("/", addToDo);

export default todoRoute;
