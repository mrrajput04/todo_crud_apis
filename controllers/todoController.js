const {todo} = require('../models/todo');

exports.addTodo = async(req,res) => {
    try {
        const todoItems = new todo(req.body);
    const savedData = await todoItems.save();
    return res.status(200).json({
        message: 'item added successfully. ',
        savedData: ({todo_Id:savedData._id})
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.showTodo = async(req,res) =>{
    try{
        const showTodo = await todo.find();
        return res.status(200).json({
            message: 'Todo' ,
            allTodo: showTodo
          });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
}

exports.updateTodo = async(req,res)=>{
    try {
        const Id = req.query._id;
        const updateTodo = await todo.findById(Id)
        return res.status(200).json({
            message: "todo updated successfully. ",
            updatedTodo: updateTodo
          });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteTodo = async(req,res)=>{
    try {
        const Id = req.query._id;
        const deleteTodo = await todo.findByIdAndDelete(Id)
        return res.status(200).json({
            message: "todo deleted successfully. ",
            deletedTodo: deleteTodo._id
          });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}