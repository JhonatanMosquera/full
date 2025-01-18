import mongoose from 'mongoose'

const  TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: String,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
},{timestamps:true})

export default mongoose.model("Task",TaskSchema)