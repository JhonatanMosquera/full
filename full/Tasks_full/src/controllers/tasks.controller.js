import Task from '../models/task.model.js'

export const getTasks = async(req,res)=>{
    const tasks = await Task.find({
        user:req.user.id
    }).populate("user")
    res.json(tasks)
}

export const CreateTaks = async(req,res)=>{
    const {title,description,date} = req.body
     // Validación de los campos requeridos
     if (!title || !description ) {
        return res.status(400).json({
          message: "Todos los campos (title, description, date) son requeridos.",
        });
      }
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })
    const saveTask = await newTask.save()
    res.json(saveTask)
}

export const getTask = async(req,res)=>{
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json(({message:"task not found"}))
    res.json(task)
}

export const updateTasks= async(req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true,})
    if (!task) return res.status(404).json(({message:"task no found"}))
    res.json(task)
}

export const deleteTask = async(req,res)=>{
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json(({message:"task not found"}))
    return res.status(204).json({message:"Eliminando tarea"})}