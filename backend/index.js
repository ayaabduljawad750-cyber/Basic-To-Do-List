import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoute from "./routes/todo.js";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/basicTodoApp")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/todos", todoRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
