const mongoose = require("mongoose");
const tags = require('./tags')
const userSchema = require('./user')

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    user_Id:{type: String},
    title: { type: String, required: true },
    description: { type: String },
   tags:[{
      title:String,
      color:String,

    }],
    // selectedTags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
    // selectedTags: {type:String},
    isCompleted: { type: String, default: false },
  },{ timestamps: true });


module.exports = mongoose.model("todoSchema", todoSchema, "todo");

