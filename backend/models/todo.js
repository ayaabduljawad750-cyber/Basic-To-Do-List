import mongoose from"mongoose";

const todoSchema = new mongoose.Schema({
  title: String
});

export default mongoose.model("Todo", todoSchema);