const { todoSchema, tagsSchema, userData } = require("../models");
const CustomErrorHandler = require('../error/CustomErrorHandler')


exports.addTodo = async (req, res) => {
  const Id = req.token.user_id;
  console.log(Id,'==<')
  try {
    const user = userData.findById(Id)
    if(!user){
      return CustomErrorHandler.notFound({message:'user not found'});
    }
    const todo = new todoSchema(req.body);
    const savedData = await todo.save();
    return res.status(200).json({
      message: "item added successfully. ",
      savedData: { todo_Id: savedData._id },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.allTodo = async(req,res)=>{
  const Id = req.token;
  console.log(Id)
  try {
  //   const user = await userData.findById(Id)
  //   if(!user){
  //     return CustomErrorHandler.notFound({message:'user not found'});
  //   }
    // console.log(user,'==>')
    const todo = await todoSchema.findById(Id);
    res.status(200).json({AllTodo:todo})
} catch(error){
  res.status(400).json({ message: error.message });
}
}

exports.showTodo = async (req, res) => {
  const Id = req.token.user_id;
  console.log(Id,'==<<')
  try {
    const showTodo = await todoSchema.findById(Id);
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
  try {
    const Id = req.query._id;
    const updateTodo = await todoSchema.findById(Id);
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
    const Id = req.query._id;
    const deleteTodo = await todoSchema.findByIdAndDelete(Id);
    return res.status(200).json({
      message: "todo deleted successfully. ",
      deletedTodo: deleteTodo._id,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
