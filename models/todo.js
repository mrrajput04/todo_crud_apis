const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    selectedTags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
    // selectedTags: {type:String},
    isCompleted: { type: String, default: false },
  },
  { timestamps: true }
);

const tagsSchema = new Schema(
  {
    todo_id: { type: Schema.Types.ObjectId, ref: "todo" },
    selectedTags: String,
    color: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const todo = mongoose.model("todo", todoSchema);
const tags = mongoose.model("tags", tagsSchema);

module.exports = { todo, tags };
