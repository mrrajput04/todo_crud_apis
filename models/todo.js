const mongoose = require("mongoose");
const tags = require('./tags')

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    selectedTags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
    // selectedTags: {type:String},
    isCompleted: { type: String, default: false },
  },{ timestamps: true });

module.exports = mongoose.model("todoSchema", todoSchema, "todo");

