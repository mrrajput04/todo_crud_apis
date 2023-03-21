const { todoSchema, tagsSchema, userData } = require("../models");
const CustomErrorHandler = require("../error/CustomErrorHandler");

exports.addTodo = async (req, res) => {
  const user_Id = req.token.user_id;
  try {
    const user = userData.findById(user_Id);
    if (!user) {
      return CustomErrorHandler.notFound({ message: "user not found" });
    }
    const updatedData = { user_Id, ...req.body };
    const todo = new todoSchema(updatedData);
    const savedData = await todo.save();
    return res.status(200).json({
      message: "item added successfully. ",
      savedData: { todo_Id: savedData._id },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.allTodo = async (req, res) => {
  const user_Id = req.token.user_id;

  try {
    const user = await userData.findById(user_Id);
    if (!user) {
      return CustomErrorHandler.notFound({ message: "user not found" });
    }
    const todo = await todoSchema.find({ user_Id: user_Id });
    res.status(200).json({ AllTodo: todo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.completeTodo = async (req, res) => {
  const user_Id = req.token.user_id;
  try {
    const user = await userData.findById(user_Id);
    if (!user) {
      return CustomErrorHandler.notFound({ message: "user not found" });
    }
    console.log(req.body,'==<')
    const { isDone, _id } = req.body;
    const todo = await todoSchema.findById(_id);
    if (todo.isDone == true) {
      return res.status(200).json({ message: "task already completed" });
    } else {
      todo.isDone = isDone;
      await todo.save();
      return res.status(200).json({ message: "task completed" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.showTodo = async (req, res) => {
  // const Id = req.token.user_id;

  try {
    const showTodo = await todoSchema.findById(id);
    // Ids = showTodo.selectedTags;
    // const tags = await tagsSchema.find({ _id: { $in: Ids } });
    return res.status(200).json({
      message: "Todo",
      Todo: { showTodo },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { title, description,  _id } = req.body;
  try {
    const user_id = req.token.user_id;
    const user = await userData.findById(user_id);
    if (!user)
      return CustomErrorHandler.notFound({ message: "user not found" });
    const updateTodo = await todoSchema.findByIdAndUpdate(
      _id,
      { title: title, description: description },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "todo updated successfully. ",
      updatedTodo: updateTodo,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const user_id = req.token.user_id;
    const user = await userData.findById(user_id);
    if (!user)
      return CustomErrorHandler.notFound({ message: "user not found" });

    const Id = req.body._id;
    const deleteTodo = await todoSchema.findByIdAndDelete(Id);
    return res.status(200).json({
      message: "todo deleted successfully. ",
      deletedTodo: deleteTodo._id,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
