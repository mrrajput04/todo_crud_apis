const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    user_Id: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    tags: [
      {
        title: String,
        color: String,
      },
    ],
    isDone: { type: Boolean, default: false },
    isDoneAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todoSchema", todoSchema, "todo");
